import React from 'react';
import { useSelector } from 'react-redux';


function Checkout() {
    const order = useSelector(store => store.order);
    console.log(order);

    return (
        <>
            <h2>Step 3: Checkout</h2>
            <div>{order.street_address}</div><div>{order.type}</div>
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
            <button>Checkout</button>
        </>
    );
}

export default Checkout;