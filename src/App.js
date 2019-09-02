import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      counter: 0
    }
  }

  render() {
    return (
      <div>
        <span className="value">{this.state.counter}</span>
        <button id="inc" onClick={this.increaseCounter}>Incrementa</button>
      </div>
    );
  }


  increaseCounter = () => {
    let counter = this.state.counter
    counter++
    this.setState({
      counter: counter
    });
  }


}

export default App;
