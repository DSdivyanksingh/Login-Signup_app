import React from 'react';
import './App.css';
import Home from './components/home/home';
import Signup from './components/signup/signup';
import Login from './components/login/login';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from 'react';


function App() {

  const [ user, setLoginUser] = useState({})
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {
              user && user._id ? <Home setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>
            }
          </Route>
          <Route path="/login">
            <Login setLoginUser={setLoginUser}/>
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
