import React from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';


function Checkout() {

    const dispatch = useDispatch();

    const customer = useSelector(store => store.customer);

    const cart = useSelector(store => store.cart);
    const total = useSelector(store => store.total);
    console.log('customer in Checkout', customer);
    console.log('cart in Checkout', cart);
    console.log('total in Checkout', total);

    // create object that look like what the state is in ORDER


    // axios post on click with BAO built from store.cart, store.total, store.customer
    /*{
        "customer_name": "Donatello", customer
        "street_address": "20 W 34th St", customer
        "city": "New York", customer
        "zip": "10001", customer
        "total": "27.98", total
        "type": "Pickup", customer
        "pizzas": [{"id": "1","quantity": "1"}, {
        "id": "2",
        "quantity": "1"
        }]
    } */

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
        total: 100,
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
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Cost</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Onamonapizza</td>
                        <td>$14.99</td>
                    </tr>
                    <tr>
                        <td>Pepperoni</td>
                        <td>$13.99</td>
                    </tr>
                </tbody>
            </table>
            <div>Total: total</div>
            <Link to={`/selectpizza`}>
                <button onClick={(evt) => handleCheckout(evt)}>Checkout</button>
            </Link>
        </>
    );
}

export default Checkout;