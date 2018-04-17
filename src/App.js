import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MapView from './components/MapView';
import HomePage from './components/HomePage';
class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <Switch> 

     
     

      

      <Route exact path="/home" componenet={HomePage} />
      <Route exact path="/map" component={MapView} />


      </Switch>
      
    
        
          
      </div>
      </Router>
    );
  }
}

export default App;
