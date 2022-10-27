import { useState } from 'react';

function CustomerInfo () {

    const [checkedVal, setCheckedVal] = useState('')

    const onChecked = (value) => {
        console.log('in onChecked')
        setCheckedVal(value);
        console.log('value', value);

    }

    const onSubmit = () => {
        
    }

    
    return (
        <>
        <h1>Step 2:</h1>
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="Name"></input>
            <input type="text" placeholder="Street Address"></input>
            <input type="text" placeholder="City"></input>
            <input type="text" placeholder="Zip"></input>
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