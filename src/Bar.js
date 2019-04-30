import React, { Component } from 'react'

class Bar extends Component {
  constructor(props) {
    super(props) // To initialise the component and props
    
    // Initialise the state (always in the constructor)
    this.state = {
      percentage: 10
    }

    // TODO: stop the interval when you reach 100%
    // Google: How to stop a setInterval

    this.intervalId = setInterval(() => {
      // To change the state, we MUST use `setState`
      this.setState({
        percentage: this.state.percentage+1
      })
      if (this.state.percentage >= 100) {
        clearInterval(this.intervalId)
      } 
    }, 50)
  }
  render() {
    let barStyle = {
      height: 20,
      width: this.state.percentage + "%",
      backgroundColor: this.props.color,
      borderRadius: 5
    }
    return (
      <div style={barStyle}>
        {this.state.percentage}%
      </div>
    )
  }
}

export default Bar