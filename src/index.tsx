import React from 'react';
import ReactDOM from 'react-dom';
import './assets/sass/index.scss';
import Layout from './view/Layout';
import { HashRouter} from 'react-router-dom';
import Router from './router/Router';

import * as serviceWorker from './serviceWorker';
const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout></Layout>
      <Router></Router>
    </HashRouter>
  );
}
ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
