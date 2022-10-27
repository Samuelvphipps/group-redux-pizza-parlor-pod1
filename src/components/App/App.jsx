import React from 'react';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {Route, HashRouter as Router} from 'react-router-dom';
import axios from 'axios';
import './App.css';
import CustomerInfo from '../CustomerInfo/CustomerInfo';

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

        <Route exact path="/customerinfo">
          <CustomerInfo />
        </Route>

    {/* checkout */}
        <Route>
        
        </Route>

    {/* Admin */}


      {/* <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p> */}
  
    </div>
    </Router>
  );
}

export default App;
