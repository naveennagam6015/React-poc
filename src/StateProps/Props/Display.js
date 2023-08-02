import React, { Component } from 'react'

export default class Display extends Component {
  render() {
    return (
      <div>
        <center>
            <h2>My name is {this.props.pushingProps}</h2>
        </center>
      </div>
    )
  }
}
