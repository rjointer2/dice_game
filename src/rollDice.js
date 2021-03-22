import React, { Component } from 'react';
import Dice from './dice';

class RollDice extends Component {

    static defaultProps = {
        sides: ["one", "two", "three", "four", "five", "six"]
    }

    constructor(props) {
        super(props);
        this.state = {
            dice1: "one",
            dice2: 'one'
        }
        this.rollDices = this.rollDices.bind(this)
    }

    rollDices() {
        const diceSide1 = this.props.sides[ 
            Math.floor(Math.random() * this.props.sides.length)
        ];

        const diceSide2 = this.props.sides[ 
            Math.floor(Math.random() * this.props.sides.length)
        ];

        this.setState({
            dice1: diceSide1, dice2: diceSide2
        })

    }


    render() {
        return (
            <div>
                <div class="dice_items">
                    <Dice face={this.state.dice1}/>
                    <Dice face={this.state.dice2}/>
                 </div>
                 <button onClick={this.rollDices}>
                    Click
                 </button>
            </div>
        )
    }
}

export default RollDice;