import React from 'react';
import { useSelector } from "react-redux";

function SelectPizza() {

    // gets list of pizzas from Redux
    const pizzas = useSelector((store) => store.pizzas);
    

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
                            <button>Order</button>
                        </li>)
                    })}
            </ul>
        </>
    );
}

export default SelectPizza;