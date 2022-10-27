import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function SelectPizza() {

    // gets list of pizzas from Redux
    const pizzas = useSelector((store) => store.pizzas);
    const cart = useSelector((store) => store.cart);
    const dispatch = useDispatch();
    const history = useHistory();

    const orderPizza = (evt, pizza) => {
        evt.preventDefault();

        dispatch({
            type: 'ADD_TO_ORDER',
            payload: pizza
        });
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
    }

    const onNext = (evt) => {
        evt.preventDefault();


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
        <ul className='pizza-list'>
            {pizzas.map(pizza => 
                {
                    return (<li className='pizza-card' key={pizza.id}>
                        <h2>{pizza.name}</h2>
                        {pizza.description}
                        {pizza.price}
                        <img src={pizza.image_path} />
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