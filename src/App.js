import './App.css';
import Nav from './Components/Nav';
import SearchResContainer from './Components/SearchResults/SearchResContainer';
import SideMenu from './Components/SideMenu';
import OpenCard from './Components/SearchResults/Pages/OpenCard';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Link }from 'react-router-dom';
import React, {useState, useEffect} from 'react'

function App() {
  return (
    <Router>
    <div className="App">
      <SideMenu/>
      <main>
        <Nav/>
        <Switch> 
          <Route path = "/" exact component = {SearchResContainer} />
          {/* <SearchResContainer/> */}
          <Route path = "/opencard" component = {OpenCard} />
        </Switch>
      </main>  
    </div>

    </Router>
  );
}

export default App;
