import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Landing from './Landing';
import History from './history/History';
import Authentication from './common/Authentication';
import About from './About';
import NotFound from './NotFound';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <Switch>
        <Route exact path="/" component={Landing}></Route>
        <Route exact path="/history" component={History}></Route>
        <Route exact path="/tutorial" component={Authentication}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route component={NotFound}></Route>
      </Switch>
    </div>
  );
}

export default App;
