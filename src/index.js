import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'; 
import logger from 'redux-logger';
import './index.css';
import App from './components/App/App';


//REDUCERS


const pizzas = (state, action) => {

}

const adminOrders = (state, action) => {

}

const order = (state, action) => {

}

const cart = (state, action) => {

}

const customer = (state, action) => {

}

const reduxStore = createStore(
    combineReducers({
      pizzas,
      adminOrders,
      order,
      cart,
      customer
    }),
    applyMiddleware(logger)
  );


//Provider
ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
