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

    const [total, setTotal] = useState(0);

    

    const onOrder = (cart) => {
        let sum = 0;
        if (cart.length === 0) {
            setTotal(0);
            console.log(sum);
        } else {
            for (let i=0; i<cart.length; i++){
                sum += Number(cart[i].price);
            }
            setTotal(sum);
            console.log(sum);
        }
    }
    
    const orderPizza = (evt, pizza) => {
        evt.preventDefault();
        dispatch({
            type: 'ADD_TO_ORDER',
            payload: pizza
        });
        onOrder(cart);
    }

    const removePizza = (evt, pizza) => {
        evt.preventDefault();
        let currentCart = cart;
        for (let i=0; i<currentCart.length; i++){
            if (currentCart[i].name === pizza.name){
              currentCart = currentCart.splice(i, 1);
            }
        }
        console.log(currentCart);
        dispatch({
            type: 'REMOVE_FROM_ORDER',
            payload: currentCart
        });
        onOrder(cart);
    }

    const onNext = (evt) => {
        evt.preventDefault();
        // TODO: set total

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