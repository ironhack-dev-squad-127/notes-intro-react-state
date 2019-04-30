import React, { Component } from 'react'

class Lamp extends Component {
  // TODO: initialise a state `isOn` in a constructor
  turnOn() {
    console.log('turnOn')
    // TODO: edit the state
  }
  turnOff() {
    console.log('turnOff')
  }
  render() {
    if (true) { // TODO: change the condition and use this.state.isOn
      return <img onClick={()=>this.turnOn()} style={{height:50}} src="/images/lamp-off.png"/>
    }
    else {
      return <img onClick={()=>this.turnOff()} style={{height:50}} src="/images/lamp-on.png"/>
    }
  }
}

export default Lamp