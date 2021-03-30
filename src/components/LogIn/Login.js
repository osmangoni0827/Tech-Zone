import React, { useContext, useState } from 'react';
import './Login.css';
import img from '../../images/logo.png';
import { LogedInContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';

import { firebaseinitializeApp, HandleSignInWithGoogle,HandleSignInWithEmailandPassword} from './LoginManager';
firebaseinitializeApp();





const Login = () => {

  const  history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  const LogedInuserContext=useContext(LogedInContext);
  const [LogedInUser,setLogedInuser]=LogedInuserContext;

    const [user,setuser]=useState({
        success:false,
        error:'',
        IsSignIn:false,
        name:'',
        photo:'',
        email:'',
        password:''
    })
   
                // HandleResponseForAllSignIn

  const Handleresponse=(res)=>{
    setuser(res);
    setLogedInuser(res);
    history.replace(from);
  }  
                          // SignInWithGoogle

    const SignInWithGoogle=()=>{
      HandleSignInWithGoogle()
      .then(res=>{
       Handleresponse(res)
      })
    }

                    // SigninWithEamilAndPassword
    const SigninWithEamilAndPassword=(e)=>{
     if(user.email&&user.password)
     {
      HandleSignInWithEmailandPassword(user.email,user.password)
      .then(res=>{
        Handleresponse(res)
      })
     }
      e.preventDefault();
     }

                           //  HandleInput
    const HandleInputValue=(e)=>{
      const NewUserInformation={...user};
        if(e.target.name==='email')
        {
          const IsvlidEmail=/\S+@\S+\.\S+/.test(e.target.value);
           IsvlidEmail&&(NewUserInformation.email=e.target.value);
        }
        else if(e.target.name==='password'){
            const IsvalidPass=/(?=.*[0-9])/.test(e.target.value);
            IsvalidPass&&(NewUserInformation.password=e.target.value);
        }
        setuser(NewUserInformation);
    }
 
    return (
    <div className='signup'>
      <div style={{textAlign:'center'}}>
        <img src={img} alt=''></img>
        <form onSubmit={SigninWithEamilAndPassword}>
        <input type='email' name='email' placeholder='Enter Your Email' required onBlur={HandleInputValue}></input>
        <input type='password' name='password' placeholder='Enter Your Password' required onBlur={HandleInputValue}></input>
        {/* <input type='submit' className='button' value='Sign In' /> */}
        <button type='submit' >Sign In</button>
        </form>
        <br></br>
        <p>Are You New User?  
          <Link to='/signup' style={{color:'yellow'}}>
             Go To Sign Up 
          </Link>
        </p>
        <br></br>
        <p>Or</p>
        <button onClick={SignInWithGoogle}> Sign In With Google</button>
        {user.success ? <p>Sign In successfully</p>:<p style={{ color: 'red' }}>{LogedInUser.error}</p>}
        </div>
    </div>
    );
};

export default Login;