import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'; 
import logger from 'redux-logger';
import './index.css';
import App from './components/App/App';


//REDUCERS


// const pizzas = (state, action) => {
//     return state
// }

// const adminOrders = (state, action) => {
//     return state
// }

// const order = (state, action) => {
//     return state
// }

// const cart = (state, action) => {
//     return state
// }

// const customer = (state, action) => {
//     return state
// }

// const reduxStore = createStore(
//     combineReducers({
//     //   pizzas,
//     //   adminOrders,
//     //   order,
//     //   cart,
//     //   customer
//     }),
//     applyMiddleware(logger)
//   );

{/* <Provider store={reduxStore}></Provider> */}
//Provider
ReactDOM.render(<App />, document.getElementById('root'));
