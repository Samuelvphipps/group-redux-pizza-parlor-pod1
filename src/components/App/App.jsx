import React from 'react';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {Route, HashRouter as Router, Link} from 'react-router-dom';
import axios from 'axios';
import './App.css';

import CustomerInfo from '../CustomerInfo/CustomerInfo';

import SelectPizza from '../SelectPizza/SelectPizza';


function App() {

  const dispatch = useDispatch();

  // gets list of pizzas on load
  useEffect(() => {
    fetchPizzas();
  }, []);


//TODO: get pizzas from database
  const fetchPizzas = () => {
    console.log('fetching pizzas');

    axios({
      method: 'GET',
      url: '/api/pizza'
    })
    .then((response) => {
      console.log(response.data);
      dispatch({
        type: 'SET_PIZZAS',
        payload: response.data
      })
    })
    .catch((err) => {
      console.log('GET error', err);
    })
  }

  return (
    <Router>
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>


{/* TODO: display select pizza page */}
      {/* select pizzas */}
      <Link to="/selectpizza">Select pizza</Link>
      <Route exact path="/selectpizza">
        <SelectPizza />
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
