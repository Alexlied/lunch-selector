import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

export default class RestaurantsPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
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

        let restaurantsEntry = restaurants.map((restaurant) =>
            <li key={restaurant.id}><a target="_blank" rel="noopener noreferrer" href={restaurant.content}>{restaurant.title}</a></li>
        );

        return (
            <div className="App">
                <div className="home-link"><Link to={"/"}>Home</Link></div>
                <h1 className='display-4'>
                    Lunch Selector
                </h1>
                <p>List of Restaurants</p>
                <ul>{restaurantsEntry}</ul>
            </div>
        );
    }
}
