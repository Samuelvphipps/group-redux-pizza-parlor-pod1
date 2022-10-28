import React from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';


function Checkout() {

    // const order = useSelector(store => store.order);
    // console.log(order);

    // let total = (state = 0, action) => {
    //     total = 0;
    //     for (let i=0; i<cart.length; i++){
    //       total += Number(cart[i].price)
    //     }
    //     return total;
    //   }


    // const dispatch = useDispatch();

    const customer = useSelector(store => store.customer);
    const cart = useSelector(store => store.cart);
    const total = useSelector(store => store.total);
    console.log('customer in Checkout', customer);
    console.log('cart in Checkout', cart);
    console.log('total in Checkout', total);

    // create object that look like what the state is in ORDER

    const pizzas = cart.map((item) => {
        return { id: item.id, quantity: 1 }
    })
    console.log('pizzas to POST', pizzas);

    const order = {
        customer_name: customer.customer_name,
        street_address: customer.street_address,
        city: customer.city,
        zip: customer.zip,
        type: customer.type,
        total: total,
        pizzas: pizzas
    }

    console.log('BAO', order);

    const handleCheckout = () => {
        //TODO axios POST order
        axios({
            method: 'POST',
            url: '/api/order',
            data: order
        })
            .then((response) => {
                console.log('POST /api/order', response);
            })
            .catch((err) => {
                console.log('POST /api/order', err);
            });
    };



    return (
        <>
            <h2>Step 3: Checkout</h2>
            <div>{customer.street_address}</div><div>{customer.type}</div>
            <table className='table'>
                <thead>
                    <tr className='adminRow'>
                        <th>Name</th>
                        <th>Cost</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((pizza) => (
                        <tr key={pizza.id} className='adminRow'>
                            <td>
                                {pizza.name}
                            </td>
                            <td>
                                {pizza.price}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>Total: {total}</div>
            <Link to={`/selectpizza`}>
                <button onClick={(evt) => handleCheckout(evt)}>Checkout</button>
            </Link>
        </>
    );
}

export default Checkout;