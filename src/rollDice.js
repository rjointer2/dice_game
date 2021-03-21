import React, { Component } from 'react';
import Dice from './dice';

class RollDice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dice1: "one",
            dice2: 'one'
        }
    }

    render() {
        return (
            <div>
                <Dice face={this.state.dice1}/>,
                <Dice face={this.state.dice2}/>
            </div>
        )
    }
}

export default RollDice;