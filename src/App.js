import React, { Component } from 'react';
import _ from 'lodash';

import './css/App.css';
import { Tooltip, Button, OverlayTrigger } from 'react-bootstrap';

import {game_name} from './game/app_config';
import {getDefaultState} from './game/default_state';
import {tick} from './game/tick';
import {data} from './game/data';
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
        if (item.onClick) this.setState(item.onClick(this.state));
    }


    render() {
        let state = this.state;

        const tooltip = (
            <Tooltip id="tooltip">

                <div className="col-lg-12 infoBar">This is the place for the long resource info.
                    <br />
                    It should describes benefits and negative sides of having the resource.
                </div>

                <div className="line"> </div>

                <div className="row">
                    <div className="col-sm-6 infoBar">Resource</div>
                    <div className="col-sm-6 infoBar">1/0</div>
                </div>
            </Tooltip>
        );


        return (
            <div className="App">
                <h2>BDC Engine Test App</h2>
                <Button onClick={this.newGame}>New Game</Button>
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
                        <h3>Clickers</h3>
                        {_.map(clickers, (item, key) => (item.locked && item.locked(this.state)) ? '' :
                            <div key={key}>
                                <OverlayTrigger delay="150" placement="right" overlay={tooltip}>
                                    <Button  onClick={() => { this.onClickWrapper(item); }}>{item.name}</Button>
                                </OverlayTrigger>
                            </div>
                        )}
                    </div>
                    <div className="flex-element">
                        <h3>Automation</h3>
                        {_.map(automators, (item, key) =>
                            <div key={key}>
                                {state[key] ? <span>{item.name}: {state[key]}</span> : ''}
                                {(item.locked && item.locked(this.state)) ? '' : <Button onClick={() => { this.onClickWrapper(item); }}>Buy {item.name}</Button>}
                            </div>
                        )}
                    </div>


                </div>
            </div>
        );
    }
}

export default App;
