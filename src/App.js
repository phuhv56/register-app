import React from 'react';
import './App.css';
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';
import HomePage from './pages/HomePage/HomePage';
import NavBar from './pages/NavBar/NavBar';

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar />
      <div className="App">
        <Router>
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/homepage" component={HomePage} />
        </Router>
      </div>
    </div>
  );
}

export default App;
