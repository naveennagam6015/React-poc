import React, { Component } from 'react'
import Display from './Display'
export default class Props extends Component {
    state={
        pushingProps:"Naveen Nagam"
    }
  render() {
    return (
      <div>
        <center>
            <Display pushingProps={this.state.pushingProps} />
        </center>
      </div>
    )
  }
}
