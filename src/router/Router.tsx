import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from '../view/App';
import About from '../view/About';

const Router: React.FC = () => {
  return(
    <Switch>
      <Route exact path="/" component={App}/>
      <Route exact path="/about" component={About}/>
    </Switch>
  )
}

export default Router;