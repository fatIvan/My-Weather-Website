import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ErrorPage from './ErrrorPage';
import Home from './Home';
import About from './About';
import WeatherPage from './WeatherPage';

const App = () => {
  return (
        <Switch>
          <Route path="/About" exact component={About}/>
          <Route path="/Error" exact component={ErrorPage} />
          <Route path="/:place" component={(props) => <WeatherPage {...props} /> } />
          <Route path="/" exact component={Home}/>
        </Switch>
    );
}

export default App;