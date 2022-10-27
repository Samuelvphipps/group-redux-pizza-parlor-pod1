import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'; 
import logger from 'redux-logger';
import './index.css';
import App from './components/App/App';


//REDUCERS


// const pizzas = (state, action) => {

// }

// const adminOrders = (state, action) => {

// }

const order = (state = {
  "customer_name": "Donatello",
  "street_address": "20 W 34th St",
  "city": "New York",
  "zip": "10001",
  "total": "27.98",
  "type": "Pickup",
  "pizzas": [{
    "id": "1",
    "quantity": "1"
  }, {
    "id": "2",
    "quantity": "1"
  }]
}, action) => {
  return state;
}

// const cart = (state, action) => {

// }

// const customer = (state, action) => {

// }

const reduxStore = createStore(
    combineReducers({
      // pizzas,
      // adminOrders,
      order,
      // cart,
      // customer
    }),
    applyMiddleware(logger)
  );


//Provider
// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
