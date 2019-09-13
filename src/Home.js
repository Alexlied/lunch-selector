import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            random: 0
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const max = 8;
        const rand = this.getRandomInt(max);
        this.setState({ random: rand });
        //console.log(rand)
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    render() {
        const map = {
            "0": "Chipotle",
            "1": "India Gate",
            "2": "Than Brothers",
            "3": "Thai",
            "4": "Ooba Tooba",
            "5": "Maley Hut",
            "6": "Joy Box",
            "7": "Greek Express"
        }

        let options = Object.values(map);

        return (
            <div className="home">
                <div className="home-title">
                    Lunch Selector
                </div>
                <p>Click the button to get a random restaurant.</p>

                <button className="btn btn-primary" onClick={this.handleClick.bind(this)}>Click</button>

                {/* <p>Random = {this.state.random}</p> */}
                <p>{options[this.state.random]}</p>

                {/* <Link to={`/QuestionPage/${placeHolderValue}`}><div className="start-button">Start Quiz</div></Link> */}
            </div>
        );
    }
}
