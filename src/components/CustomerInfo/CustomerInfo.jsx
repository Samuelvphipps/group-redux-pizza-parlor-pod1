import { useState } from 'react';

function CustomerInfo () {

    const [checkedVal, setCheckedVal] = useState('')

    const [formVal, setFormVal] = useState({
        customer_name: '',
        street_address: '',
        city: '',
        zip: '',
        type: ''
    })

    
    const onChecked = (value) => {
        console.log('in onChecked')
        setCheckedVal(value);
        console.log('value', value);

    }

    const onSubmit = (evt) => {
        evt.preventDefault();
        setFormVal({
            customer_name: evt.target.customer_name.value,
            street_address: evt.target.street_address.value,
            city: evt.target.city.value,
            zip: evt.target.zip.value,
            type: checkedVal
        });
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