import React, { Component } from 'react';

class Dice extends Component {
    render() {
        return (
            <div>
                <p>
                <i className={`fas fa-dice-${this.props.face} ${this.props.rolling ? 'roll' : ''}`}></i>
                </p>
            </div>
        )
    }
}

export default Dice