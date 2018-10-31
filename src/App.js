import React, { Component } from 'react';
import Show from './show';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      visible: true
    }
  }

    showHey = () => {
        this.setState(prevState => ({ show1: !prevState.show1, visible: !prevState.visible}));
    }

    showBonjour = () => {
        this.setState(prevState => ({ show2: !prevState.show2}));
    }

    showHai = () => {
        this.setState(prevState => ({ show3: !prevState.show3}));
    }

    showOi = () => {
        this.setState(prevState => ({ show4: !prevState.show4}));
    }

    setVisible = () => {
      this.setState(prevState => ({ visible: !prevState.visible}))
    }

  render() {
    return (
      <div className="App">
        <div onClick={this.showHey} >{this.state.show1 ? <Show greeting='ohhey'/> : 'hi'}</div>
        <div onClick={this.showBonjour}>{this.state.show2 ? <Show greeting='bonjour'/> : 'hello'}</div>
        <div onClick={this.showHai}>{this.state.show3 ? <Show greeting='ohai' /> : 'hola'}</div>
        <div onClick={this.showOi}>{this.state.show4 ? <Show greeting='oi' /> : 'prego'}</div>
      </div>
    );
  }
}

export default App;
