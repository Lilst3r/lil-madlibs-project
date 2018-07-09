import React, { Component } from 'react';

import Input from './input';
import Content from './content';

class Card extends Component {

    constructor() {
        super()

        this.state = {
            color: '',
            pluralNoun: '',
            adjectiveOne: '',
            celebOne: '',
            adjectiveTwo: '',
            nounOne: '',
            numberOne: '',
            numberTwo: '',
            nounTwo: '',
            adjectiveThree:'',
            celebTwo: '',
            celebThree:'',
            adjectiveFour: '',
            nounThree: '',
            celebFour: '',
            adjectiveFive: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);

    }

    handleInputChange(event) {
        this.setState({ [event.target.name]: event.target.value})
    }

    render() {

        const inputData = [
            {title: 'Color', state: this.state.color, name: 'color'},
            {title: 'Plural Noun', state: this.state.pluralNoun, name: 'pluralNoun'},
            {title: 'Adjective One', state: this.state.adjectiveOne, name: 'adjectiveOne'},
            {title: 'Celebrity One', state: this.state.celebOne, name: 'celebOne'},
            {title: 'Adjective Two', state: this.state.adjectiveTwo, name: 'adjectiveTwo'},
            {title: 'Noun One', state: this.state.nounOne, name: 'nounOne'},
            {title: 'Number One', state: this.state.numberOne, name: 'numberOne'},
            {title: 'Number Two', state: this.state.numberTwo, name: 'numberTwo'},
            {title: 'Noun Two', state: this.state.nounTwo, name: 'nounTwo'},
            {title: 'Adjective Three', state: this.state.adjectiveThree, name: 'adjectiveThree'},
            {title: 'Celebrity Two', state: this.state.celebTwo, name: 'celebTwo'},
            {title: 'Celebrity Three', state: this.state.celebThree, name: 'celebThree'},
            {title: 'Adjective Four', state: this.state.adjectiveFour, name: 'adjectiveFour'},
            {title: 'Noun Three', state: this.state.nounThree, name: 'nounThree'},
            {title: 'Celebrity Four', state: this.state.celebFour, name: 'celebFour'},
            {title: 'Adjective Five', state: this.state.adjectiveFive, name: 'adjectiveFive'}
        ]

        return (
            <div className="card">
                {
                    inputData.map(data => Input( (data), this.handleInputChange ))
                }
                <Content data={this.state}/>
            </div>
        )
    }
}

export default Card;