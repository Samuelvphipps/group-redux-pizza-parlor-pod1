import React from 'react';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {Route, HashRouter as Router} from 'react-router-dom';
import axios from 'axios';
import './App.css';

function App() {

  return (
    <Router>
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
      {/* select pizzas */}
        <Route>

        </Route>

    {/* customerInfo */}

        <Route>
        
        </Route>

    {/* checkout */}
        <Route>
        
        </Route>

    {/* Admin */}
      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
  
    </div>
    </Router>
  );
}

export default App;
