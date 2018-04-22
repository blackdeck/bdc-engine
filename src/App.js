import React, { Component } from 'react';
import _ from 'lodash';

import './css/App.css';

import {game_name} from './game/app_config';
import {getDefaultState} from './game/default_state';
import {tick} from './game/tick';
import {data} from './game/data';
import {oneclickers} from './game/oneclickers';
import {clickers} from './game/clickers';
import {automators} from './game/automators';

class App extends Component {
    constructor(props) {
        super(props);

        this.timerID = null;

        this.playGame = this.playGame.bind(this);
        this.pauseGame = this.pauseGame.bind(this);
        this.setGameSpeed = this.setGameSpeed.bind(this);
        this.tick = this.tick.bind(this);
        this.newGame = this.newGame.bind(this);

        this.state = getDefaultState();
    }

    componentDidMount() {
        console.log('App '+game_name+' componentDidMount');
        var app_state = JSON.parse(localStorage.getItem(game_name+"_app_state"));
        this.setState(app_state ? app_state : getDefaultState());
        this.playGame();
    }

    playGame() {
        clearInterval(this.timerID);
        this.timerID = setInterval(
            () => this.tick(),
            Math.floor(this.state.game_speed / this.state.game_speed_multiplier)
        );
        this.setState({game_paused: false});
    }

    pauseGame() {
        clearInterval(this.timerID);
        this.setState({game_paused: true});
    }

    setGameSpeed(speed) {
        this.setState({game_speed_multiplier: speed});
        this.playGame();
    }

    newGame() {
        if (!window.confirm('Are you ready to start a new game? Your progress will be lost.')) return false;
        localStorage.setItem(game_name+"_app_state", null);
        this.setState(getDefaultState());
        this.playGame();
    }

    tick() {
        let state = tick(this.state);
        localStorage.setItem(game_name+"_app_state", JSON.stringify(state));
        this.setState(state);
    }


    onClickWrapper(item) {
        if (item.cost) {
            if (this.isEnough(this.state, item.cost)) {
                if (item.onClick) this.setState(item.onClick(this.chargeCost(this.state, item.cost)));

            }
            else { return false; }
        }
        else {
            if (item.onClick) this.setState(item.onClick(this.state));
        }
    }

    isEnough(state, cost) {
        let enough = true;
        _.each(cost, (value, resource_key) => {
            if (state[resource_key] < value) enough = false;
        });
        return enough;
    }

    chargeCost(state, cost) {
        if (!this.isEnough(this.state, cost)) return false;
        console.log(cost);
        _.each(cost, (value, resource_key) => {
            state[resource_key] -= value;
        });
        return state;
    }


    render() {
        let state = this.state;


        return (
            <div className="App">
                <h2>BDC Engine Test App</h2>
                <button onClick={this.newGame}>New Game</button>
                <div className="flex-container-row">
                    <div className="flex-element">
                        <h3>Data</h3>
                        { _.map(data, (item, key) =>
                            <div key={key}>
                                {item.name}: {state[key]}
                            </div>
                        )}
                    </div>
                    <div className="flex-element">
                        <h3>OneClickers</h3>
                        {_.map(oneclickers, (item, key) =>
                            (item.locked && item.locked(this.state))
                                ? ''
                                :
                                <div key={key} title={item.text ? item.text : '' }>
                                    {this.state[key]
                                        ? <span>{item.name}</span>
                                        :
                                        <button
                                            className={(item.cost ? this.isEnough(this.state, item.cost) ? '' : 'disabled' : '')}
                                            onClick={() => { this.onClickWrapper(item); }}>
                                            {item.name}
                                        </button>}
                                </div>
                        )}
                    </div>
                    <div className="flex-element">
                        <h3>Clickers</h3>
                        {_.map(clickers, (item, key) =>
                            (item.locked && item.locked(this.state))
                                ? ''
                                :
                                <div key={key} title={item.text ? item.text : '' }>
                                    <button
                                        className={(item.cost ? this.isEnough(this.state, item.cost) ? '' : 'disabled' : '')}
                                        onClick={() => { this.onClickWrapper(item); }}>
                                        {item.name}
                                    </button>
                                </div>
                        )}
                    </div>
                    <div className="flex-element">
                        <h3>Automation</h3>
                        {_.map(automators, (item, key) =>
                            (item.locked && item.locked(this.state))
                                ? ''
                                :
                                <div key={key} title={item.text ? item.text : '' }>
                                    {state[key] ? <span>{item.name}: {state[key]}</span> : ''}
                                    {<button
                                        className={(item.cost ? this.isEnough(this.state, item.cost) ? '' : 'disabled' : '')}
                                        onClick={() => { this.onClickWrapper(item); }}>
                                        Buy {item.name}
                                        </button>}
                                </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
