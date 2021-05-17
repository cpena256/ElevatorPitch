import React from "react";
import Header from './Header';
import SwipeButtons from './SwipeButtons';
import ProfileCards from './ProfileCards';
import Chats from './Chats';
import ChatScreen from './ChatScreen';
import Login from './Login';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import './App.css';
import { useStateValue } from "./StateProvider";


function App() {
 
  const [{user}, dispath] = useStateValue();
  return (
    <div className="App">
    <Router>
      {!user ? (
        <Login />
      ) :(
        <>
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
          </>
      )}
      
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
