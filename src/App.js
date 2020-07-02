import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    stateOne: "Jose Mario"
  };

  nameChangeHandler = (event) => {
    this.setState({
      stateOne: event.target.value
    } )
  }

  render() {
    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px'
    }

    return (
      <div className="App">
        <h1 style={style}>Tarea 1</h1>
        <UserInput
          name= {this.state.stateOne}
          changed={this.nameChangeHandler}/>
        <UserOutput 
          name="Mario" />
        <UserOutput
          name={this.state.stateOne} />
      </div>
    );
  }
}

export default App;
