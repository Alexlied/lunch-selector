import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            random: 0,
            hasClicked: false
        }
        this.handleClick = this.handleClick.bind(this);
    }


    handleClick() {
        const max = 9;
        const rand = this.getRandomInt(max);
        this.setState({ random: rand });
        this.setState({ hasClicked: true });
        console.log(rand)
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    render() {
        if (!this.state.hasClicked) {
            return (
                <div className="App">
                    <h1 className='display-4'>
                        Lunch Selector
                    </h1>
                    <h3>Click the button to get a random restaurant.</h3>
                    <h3>The complete list of restaurants can be found <Link to={"/restaurants"}>here</Link>.</h3>

                    <button className="btn btn-primary" onClick={this.handleClick.bind(this)}>Click</button>
                </div>
            );
        }

        const restaurants = [
            { id: 0, title: 'Chipotle', content: 'https://goo.gl/maps/soX6VUzjy1wT2j4RA' },
            { id: 1, title: 'India Gate', content: 'https://goo.gl/maps/7DhvLTw1qTk3BMGo8' },
            { id: 2, title: 'Than Brothers', content: 'https://goo.gl/maps/zf8pePsJovrSJPNo9' },
            { id: 3, title: 'O\'Char Thai', content: 'https://goo.gl/maps/X5nKFxPDarLxP3T86' },
            { id: 4, title: 'Ooba Tooba', content: 'https://g.page/Ooba-Tooba-Bellevue?share' },
            { id: 5, title: 'Malay Satay Hut', content: 'https://goo.gl/maps/tS7bFfZu5As6WTFw9' },
            { id: 6, title: 'Joy Box', content: 'https://g.page/joy-box-bellevue?share' },
            { id: 7, title: 'Greek Express', content: 'https://goo.gl/maps/eYp25kQH6Sq3Yd5aA' },
            { id: 8, title: 'MOD Pizza', content: 'https://goo.gl/maps/15SpGvLjDAfxSsXBA' }
        ];

        return (
            <div className="App">
                <h1 className='display-4'>
                    Lunch Selector
                </h1>
                <h3>Click the button to get a random restaurant.</h3>
                <h3>The complete list of restaurants can be found <Link to={"/restaurants"}>here</Link>.</h3>

                <button className="btn btn-primary" onClick={this.handleClick.bind(this)}>Click</button>
                <p><a target="_blank" rel="noopener noreferrer" href={restaurants[this.state.random].content}>{restaurants[this.state.random].title}</a></p>
                {/* <div id="restaurant" class="row restaurant"></div> */}
            </div>
        );
    }
}
