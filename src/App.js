import React, { Component } from 'react';
import Header from './components/Header';
import Controllers from './components/Controllers';
import Display from './components/Display';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  handleSelection (userSelection) {
    this.setState({ userSelection });
  }

  render() {
    return (
    <div>
      <Header />
      <Display userSelection={this.state.userSelection} />
      <Controllers onUserSelection={this.handleSelection.bind(this)} />
    </div>);
  }
}

export default App;
