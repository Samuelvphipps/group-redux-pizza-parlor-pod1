import React from 'react';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {Route, HashRouter as Router} from 'react-router-dom';
import axios from 'axios';
import './App.css';

function App() {

  // gets list of pizzas on load
  useEffect(() => {
    fetchPizzas();
  }, []);


//TODO: get pizzas from database
  const fetchPizzas = () => {
    console.log('fetching pizzas');

    axios({
      method: 'GET',
      url: '/'
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
