import React, { Component } from 'react';

import Footer from '../layout/Footer/Footer';

import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Footer newGame={this.newGame} />
      </div>
    );
  }
}
