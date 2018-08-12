import React, { Component } from 'react';

import Footer from '../../layout/Footer/Footer';
import DemoPage from '../DemoPage/DemoPage';

import '../../../css/main.css';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <DemoPage />
        <Footer newGame={this.newGame} />
      </div>
    );
  }
}
