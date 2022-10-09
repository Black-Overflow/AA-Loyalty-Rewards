import './App.css';
import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import { useState } from 'react';
import Button from './Button';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import {LandingPage} from './LandingPage'
import {Verification} from './Verification'
import {AAForm} from './AAForm'
import {ConfirmationPage} from './ConfirmationPage'



function App() {
  return (
    <div className="App">
    <Router>
          <div>


            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Routes>
              <Route exact={true} path="/aaform" element={<AAForm/>}/>
              <Route exact={true} path="/verification" element={<Verification/>}/>
              <Route exact={true} path="/" element={<LandingPage/>}/>
              <Route exact={true} path="/ConfirmationPage" element={<ConfirmationPage/>}/>
            </Routes>
          </div>
        </Router>




    </div>
  );
}
const toAAdvantageForm = () => {

}
export default App;
