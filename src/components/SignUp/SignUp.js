import  { React,useState } from 'react';
import './SignUp.css';
import img from '../../images/logo.png';
import { Link } from 'react-router-dom';
import { CreateUserEmailAndPassword } from './SignUpManager';


const SignUp = () => {
    const [user, setuser] = useState({
        name: '',
        email: '',
        password: '',
        confirmpassword: '',
        IsSignUp: false,
        error: '',
        success: false
    })


    const HandleInputValue=(e)=>{
        const NewUser={...user};
        if(e.target.name==='name'){
            NewUser.name=e.target.value
        }
        else if(e.target.name==='email')
        {
            const IsvlidEmail=/\S+@\S+\.\S+/.test(e.target.value);
           IsvlidEmail&&(NewUser.email=e.target.value);
        }
        else if(e.target.name==='password'){
            const IsvalidPass=/(?=.*[0-9])/.test(e.target.value);
            IsvalidPass&&(NewUser.password=e.target.value);
        }
        else if(e.target.name==='confirm-password'){
            const IsvalidPass=/(?=.*[0-9])/.test(e.target.value);
            IsvalidPass&&(NewUser.confirmpassword=e.target.value);
        }
        setuser(NewUser)
        // console.log(NewUser);
    }
    
    
    const HandleSubmit=(e)=>{

    if(user.email && user.password===user.confirmpassword){
            CreateUserEmailAndPassword(user.name,user.email,user.password,)
            .then(res=>{
                setuser(res);
            })
        }
        else{
            const Newuser={...user};
            Newuser.error='Confirm Password are not match';
            setuser(Newuser);
        }
    
        e.preventDefault();
    }
    return (
        <div className='signup'>
            <div style={{textAlign:'center'}}>
            <img src={img} alt=''></img>
            <form onSubmit={HandleSubmit}>
                <input type='text' name='name' placeholder='Enter Your Name' required onBlur={HandleInputValue}></input>
                <input type='email' name='email' placeholder='Enter Your Email' required onBlur={HandleInputValue}></input>
                <input type='password' name='password' placeholder='Enter Your Password' required onBlur={HandleInputValue}></input>
                <input type='password' name='confirm-password' placeholder='Enter Confirm Password' required onBlur={HandleInputValue}></input>
                <input type='submit' className='button' value='Sign Up' />
            </form>
            {user.success ?
             <div>
                 <p>New Account Sign up successfully</p>
             </div>
             :<p style={{ color: 'red' }}>{user.error}</p>
             }
             <p style={{color:'black'}}>Are You Already SignUp? <Link to='/login' >Go To Sign In</Link></p>
            </div>
        </div>
    );
};

export default SignUp;