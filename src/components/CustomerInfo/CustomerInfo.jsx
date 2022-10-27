import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

function CustomerInfo () {

    const dispatch=useDispatch();
    const history=useHistory();
    //localstate for radio buttons
    const [checkedVal, setCheckedVal] = useState('')

    //on radio check set local state (Im sure there is a better way to do this)
    const onChecked = (value) => {
        console.log('in onChecked')
        setCheckedVal(value);
        console.log('value', value);
    }

    const onSubmit = (evt) => {
        evt.preventDefault();

        //create new customer to dispatch
        let newCustomer=({
            customer_name: evt.target.customer_name.value,
            street_address: evt.target.street_address.value,
            city: evt.target.city.value,
            zip: evt.target.zip.value,
            type: checkedVal
        });
        //dispatch to redux customer state
        dispatch({
            type: 'FORM_DATA',
            payload: newCustomer
        });

        history.push('/checkout');

    }
    
    return (
        <>
        <h1>Step 2:</h1>
        <form onSubmit={(evt)=>onSubmit(evt)}>
            <input type="text" name="customer_name" placeholder="Name"></input>
            <input type="text" name="street_address" placeholder="Street Address"></input>
            <input type="text" name="city" placeholder="City"></input>
            <input type="text" name="zip" placeholder="Zip"></input>
            <div>
                <label>Pickup</label>
                <input value="Pickup" onChange={()=>onChecked('pickup')} required name="type" type="radio"></input>
                <label>Delivery</label>
                <input value="Delivery" onChange={()=>onChecked('delivery')} required name="type" type="radio"></input>
            </div>
            <button type="submit">Next</button>
        </form>
        
        
        </>
    );
}



export default CustomerInfo