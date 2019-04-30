import React, { Component } from 'react'

// // Long solution
// class Lamp extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       isOn: false
//     }
//   }
//   turnOn() {
//     console.log('turnOn')
//     // TODO: edit the state
//     this.setState({
//       isOn: true
//     })
//   }
//   turnOff() {
//     console.log('turnOff')
//     this.setState({
//       isOn: false
//     })
//   }
//   render() {
//     if (!this.state.isOn) {
//       return <img onClick={()=>this.turnOn()} style={{height:50}} src="/images/lamp-off.png"/>
//     }
//     else {
//       return <img onClick={()=>this.turnOff()} style={{height:50}} src="/images/lamp-on.png"/>
//     }
//   }
// }

// Short solution
class Lamp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOn: false
    }
    this.switch = this.switch.bind(this) // We need to bind once the function
  }
  switch() {
    this.setState({
      isOn: !this.state.isOn
    })
  }
  render() {
    return <img 
        onClick={this.switch} 
        style={{height:50}} 
        src={this.state.isOn ? "/images/lamp-on.png" : "/images/lamp-off.png"}
      />
  }
}

export default Lamp

console.log(6 > 7 ? 'red' : 'green') // => green
console.log(9 > 7 ? 'red' : 'green') // => red