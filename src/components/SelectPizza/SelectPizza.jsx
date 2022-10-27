import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function SelectPizza() {

    // gets list of pizzas from Redux
    const pizzas = useSelector((store) => store.pizzas);
    const dispatch = useDispatch();
    const history = useHistory();

    const orderPizza = (evt, pizza) => {
        evt.preventDefault();

        dispatch({
            type: 'ADD_TO_ORDER',
            payload: pizza
        });
    }

    const onNext = (evt) => {
        evt.preventDefault();

        history.push('/customerinfo');
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
                            <button onClick={(evt)=>orderPizza(evt, pizza)}>Order</button>
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