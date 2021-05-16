import React from "react";
import Header from './Header';
import SwipeButtons from './SwipeButtons';
import ProfileCards from './ProfileCards';
import Chats from './Chats';
import ChatScreen from './ChatScreen';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
      <Route path="/chat/:person"> 
        <Header backButton="/chat"/>
          <ChatScreen />
        </Route>
        <Route path="/chat">
        <Header backButton="/"/> 
          <Chats />
        </Route>
        <Route path="/">
          <Header/>
          <ProfileCards />
          <SwipeButtons />
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
