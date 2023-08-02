import React, { Component } from 'react'

export default class State extends Component {

    state = {
        name : "Naveen Nagam"
    }
    render() {
        return (
            <div>

                <center>
                    <h2>My name is {this.state.name}</h2>
                </center>
            </div>

        )
    }
}
