import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { LogedInContext } from '../../App';
import './Shipment.css';
const Shipment = () => {



    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data =>{
    console.log(data);
  } 
  console.log(watch("example")); // watch input value by passing the name of it
  const [LogedInUser]=useContext(LogedInContext);
  return (
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
  );
};

export default Shipment;