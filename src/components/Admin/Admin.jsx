import axios from 'axios';
import {useSelector} from 'react-redux';


function Admin(){
    
    let orders;

    axios({
        method: 'GET',
        url: '/api/order'
    })
        .then((response)=>{
            orders=response;
            console.log(response.data)
        })
        .catch(err=>console.error('in get orders api err', err));

    
    return(
        <h1>meow</h1>
    );
}


export default Admin;