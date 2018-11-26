import React, { Component } from 'react';
import Header from './components/Header';
import Stats from './components/Stats';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      won: 0,
      lost: 0
    };
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Stats won={this.state.won} lost={this.state.lost}/>
      </div>
    );
  }
}

export default App;
