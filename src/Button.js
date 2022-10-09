import './App.css';
import React, {Component} from 'react';
import { useState } from 'react'



function Button() {
  return (
    <div className="App">
      <button onClick={()=>window.location.href="http://localhost:3000/verification"}>Make Me a Member!</button>
      
    </div>
  );
}

export default Button;