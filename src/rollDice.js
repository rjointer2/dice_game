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
            dice2: 'one',
            rolling: false
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
            dice1: diceSide1, dice2: diceSide2, rolling: true
        });

        setTimeout(() => {
            this.setState({
                rolling: false
            })
        },1000)

    }


    render() {
        return (
            <div>
                <div class="dice_items roll_dice">
                    <Dice face={this.state.dice1} rolling={this.state.rolling}/>
                    <Dice face={this.state.dice2} rolling={this.state.rolling}/>
                 </div>
                 <button onClick={this.rollDices} disabled={this.state.rolling}>
                     {this.state.rolling ? "Rolling!" : "Roll Dice"}
                 </button>
            </div>
        )
    }
}

export default RollDice;