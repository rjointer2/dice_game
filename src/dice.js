import React, { Component } from 'react';

class Dice extends Component {
    render() {
        return (
            <div>
                <p>
                <i class={`fas fa-dice-${this.props.face}`}></i>
                </p>
            </div>
        )
    }
}

export default Dice