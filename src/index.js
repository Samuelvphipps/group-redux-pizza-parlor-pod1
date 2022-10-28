import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'; 
import logger from 'redux-logger';
import './index.css';
import App from './components/App/App';


//REDUCERS

const customer = (state={}, action) => {
    switch(action.type){
        case 'FORM_DATA':
            return action.payload
    }
    return state
}

// list of pizzas from "pizza" table in database
const pizzas = (state = [], action) => {
  switch(action.type){
    case 'SET_PIZZAS':
      return action.payload;
  }
 return state;
}

const adminOrders = (state, action) => {
  return state;
}

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

const cart = (state = [], action) => {
  let currentCart = state;
  if(action.type === 'ADD_TO_ORDER'){
      for (let i=0; i<currentCart.length; i++){
        if (currentCart[i].name === action.payload.name){
          return state;
        }
      }  
      return [...state, action.payload];    
  } else if (action === 'REMOVE_FROM_ORDER') {
    return action.payload;
  }
  return state;
}

const total = (state = 0, action) => {
  switch(action.type){
    case 'SET_TOTAL': 
    return action.payload;
    default: return state;
  }
}

const reduxStore = createStore(
    combineReducers({
      pizzas,
    //   adminOrders,
      order,
      cart,
      customer,
      total
    }),
    applyMiddleware(logger)
  );


//Provider
// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
