import React from "react";
import Header from './Header';
import ProfileCards from './ProfileCards';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";


import './App.css';

function App() {
  return (
    <div className="App">
    
    <Header/>

    <Router>
      <Switch>
        <Route path="/chat">
          <h1>Chat page</h1>
        </Route>
        <Route path="/">
          <ProfileCards />
        </Route>
      </Switch>
    </Router>
    {/* Header Component */}
    {/* Profile cards */}
    {/* Buttons at Bottom */}

    {/* Chat screen */}
    {/* Inidividual chat rooms */}


    </div>
  );
}

export default App;
