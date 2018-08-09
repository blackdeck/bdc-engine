import React, { Component } from 'react';

import Footer from '../layout/Footer/Footer';

import '../../css/main.css';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="foo">hello</div>
        <Footer newGame={this.newGame} />
      </div>
    );
  }
}
