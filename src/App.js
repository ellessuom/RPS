import React, { Component } from 'react';
import Header from './components/Header';
import Controllers from './components/Controllers';

class App extends Component {
  render() {
    return (
    <div>
      <Header />
      <Controllers />
    </div>);
  }
}

export default App;
