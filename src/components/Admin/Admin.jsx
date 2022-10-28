import axios from 'axios';
import {useSelector} from 'react-redux';
import { useEffect, useState } from 'react';


function Admin(){

    const orders = useSelector(store => store.adminOrders)


    return(
        <table className='table'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Time</th>
                    <th>Type</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                {orders.map((order)=>{
                    return(
                    <tr key={order.id}>
                        <td>{order.customer_name}</td>
                        <td>{order.time}</td>
                        <td>{order.type}</td>
                        <td>{order.total}</td>
                    </tr>
                )})}
            </tbody>
        </table>
    )

}


export default Admin;