import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import RestaurantsPage from './RestaurantsPage';

function App() {
  return (
    <div className="body">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/restaurants" component={RestaurantsPage} />
          {/* <Route exact path="/QuestionPage/:id" component={QuestionPage} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
