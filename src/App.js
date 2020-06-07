import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.scss';
import Header from './components/Header/Header';
import Feeds from './containers/Feeds/Feeds';
import Expander from './containers/Expander/Expander';
import Filterable from './containers/Filterable/Filterable';

function App() {
  return (
    <div className="body-wrapper">
      <Header />
      <main className="main-content">
        <div className="main-title">
          <h1>Welcome to my code test</h1>
        </div>

        <Switch>
          <Route path="/feeds" component={Feeds} />       
          <Route path="/expander" component={Expander} />       
          <Route path="/filterable" component={Filterable} />  
        </Switch>
      </main>
      <footer>
        <small>Copyright 2020. All rights reserved.</small>
      </footer>
    </div>
  );
}

export default App;
