import React, {Fragment} from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './modules/Home/components/Home';

const App = () => {
  return (
    <Fragment>
      <main className="app-main">
        <div className="app-main-in">
            <AppRouter />
        </div>
      </main>
    </Fragment>
    
  );
}


/**
 * component for routing
 */
const AppRouter=()=>(
  <Router>
    <Switch>
        <Route path="/" exact component={Home} />
    </Switch>
  </Router>
  );

  
export default App;

