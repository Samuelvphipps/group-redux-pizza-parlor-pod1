import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function SelectPizza() {

    // gets list of pizzas from Redux
    const pizzas = useSelector((store) => store.pizzas);
    const cart = useSelector((store) => store.cart);
    const dispatch = useDispatch();
    const history = useHistory();


    let total = 0;
    if (cart.length === 0) {
        console.log('total', total);
    } else {
        for (let i=0; i<cart.length; i++){
            total += Number(cart[i].price);
        }
        console.log('total', total);
    }
    
    const orderPizza = (evt, pizza) => {
        evt.preventDefault();
        dispatch({
            type: 'ADD_TO_ORDER',
            payload: pizza
        });
    }

    const removePizza = (evt, pizza) => {
        evt.preventDefault();
    let newCart = [];
      for (i=0; i<cart.length; i++) {
        if (cart[i].name === pizza.name){
          i++;
      } else {
        newCart.push(pizza[i]);
      }
        dispatch({
            type: 'REMOVE_FROM_ORDER',
            payload: newCart
        });
    }
    }

    const onNext = (evt) => {
        evt.preventDefault();

        dispatch({
            type: 'SET_TOTAL',
            payload: total
        })
        history.push('/customerinfo');
    }

    function displayEither(pizza) {
        for (let i=0; i<cart.length; i++){
            if (cart[i].name === pizza.name){
                return (<button onClick={(evt)=>removePizza(evt, pizza)}>Remove</button>)
            }
        }
        return (<button onClick={(evt)=>orderPizza(evt, pizza)}>Order</button>)
    }

    return (
        <>
        <h1>Select Pizza</h1>
        <h2>Total: ${total}</h2>
                        {JSON.stringify(cart)}
        <ul className='pizza-list'>
            {pizzas.map(pizza => 
                {
                    return (<li className='pizza-card' key={pizza.id}>
                        <h2>{pizza.name}</h2>
                        
                        <img src={pizza.image_path} />
                        <p>{pizza.description}</p>
                        <p>{pizza.price}</p>
                        {displayEither(pizza)}
                    </li>)
                })}
        </ul>
            <div>
                <button onClick={(evt)=>(onNext(evt))}>NEXT</button>
            </div>
        </>
    );
}

export default SelectPizza;