import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import { useEffect, useState } from 'react';


function Admin(){

    const dispatch=useDispatch();

    useEffect(() => {
        fetchOrders();
      }, []);

    const fetchOrders=()=>{
        axios({
            method: 'GET',
            url: '/api/order'
        })
            .then((response)=>{
                let orders=response.data;
                console.log('orders is', orders);
                dispatch({
                  type:'SET_ORDERS',
                  payload: orders,
                })
            })
            .catch(err=>console.error('in get orders api err', err));
    };

    const orders = useSelector(store => store.adminOrders)

    console.log('orders is: in function not get:', orders)
    return(
        <table className='table'>
            <thead>
                <tr className="adminRow">
                    <th>Name</th>
                    <th>Time</th>
                    <th>Type</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                {orders.map((order)=>{
                    return(
                    <tr className="adminRow" key={order.id}>
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