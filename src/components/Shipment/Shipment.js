import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { LogedInContext } from '../../App';
import { getDatabaseCart, processOrder } from '../../utilities/databaseManager';
import Payment from '../Payment/Payment';
import './Shipment.css';
const Shipment = () => {
    const history=useHistory();
    const { register, handleSubmit, watch, errors } = useForm();
    const[LogedInUser]=useContext(LogedInContext);
    const [shipmentData,setShipmentData]=useState(null);
    const onSubmit = data =>{
      setShipmentData(data);
    console.log(data);
  } 
  const HandlePaymentAndOrder=(id)=>{
    const product=getDatabaseCart();
    const OrderDetails={...LogedInUser,Products:product,OrderInfo:shipmentData,PaymentId:id,OrderTime:new Date().toDateString('dd/MM/yyyy')}
    fetch(' https://blooming-brook-15210.herokuapp.com/addOrder',{
      method:'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(OrderDetails)
    })
    .then(res=>res.json())
    .then(data=>
     {
       if(data){
         alert('Order successfully');
         processOrder();
         history.push('/shop');
       }
     })
  }
  return (

   <div className='row'>
     <div className="col col-md-6" style={{display:shipmentData?'none':'block'}}>
       <form onSubmit={handleSubmit(onSubmit)} className='ShipmentForm'>
    
      <input name="firstName" placeholder='Enter Your Name' defaultValue={LogedInUser.name} type='text' ref={register({ required: true })} />
      <p>{errors.name && <span style={{color:'red'}}>This field is required</span>}</p>

      <input name="lastName" placeholder='Enter Your Last Name' type='text' ref={register({ required: true })} />
      <p>{errors.lastName && <span style={{color:'red'}}>This field is required</span>}</p>

      <input name="email"  placeholder='Enter Your Email' defaultValue={LogedInUser.email} type='email' ref={register({ required: true })} />
      <p>{errors.email && <span style={{color:'red'}}>This field is required</span>}</p>


      <input name="YourPhone" placeholder='Enter Your Phone' type='text ' ref={register({ required: true })} />
      <p>{errors.YourPhone && <span style={{color:'red'}}>This field is required</span>}</p>

      <input name="district" placeholder='Enter Your District' type='text ' ref={register({ required: true })} />
      <p>{errors.district && <span style={{color:'red'}}>This field is required</span>}</p>

      <input name="Upajila" placeholder='Enter Your Upajila' type='text ' ref={register({ required: true })} />
        <p>{errors.Upajila && <span style={{color:'red'}}>This field is required</span>}</p> 

      <textarea rows="4" cols="50" name="address" form="usrform">
        Enter Address here...</textarea>
      
      <button type="submit">Submit</button>
    </form>
     </div>
     <div className="col col-md-6" style={{display:shipmentData?'block':'none'}}>
      <Payment HandlePaymentAndOrder={HandlePaymentAndOrder}></Payment>
      {/* {
        HandlePaymentAndOrder(20)
      } */}
     </div>
   </div>
  );
};

export default Shipment;