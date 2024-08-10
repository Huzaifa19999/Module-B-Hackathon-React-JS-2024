import 'bootstrap/dist/css/bootstrap.css';
import HZ_Input from '../../components/HZ_Input';
import { useState } from 'react';
import './login.css'
import {  useNavigate } from 'react-router-dom';
// import HZ_Button from '../../components/HZ_Button';
import { logInUser } from '../../config/firebase/firebaseMethod';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../../config/redux/reducer/loginReducer';

function Login() {
  const [email, setEmail] = useState<any>('');
  const [password, setPassword] = useState<any>('');
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const loginDetails = useSelector((a:any)=>a.login.loginDetail) 
    console.log(loginDetails)
  



  const enterLogin = (e: any) => {
    e.preventDefault();
    if (email && password) {
      

      logInUser(email,password)
      .then((data)=>{
          console.log(data)
          navigate('/home/user');
      })
      .catch((err)=>{
        console.log(err)
        alert(err.message)
        setEmail('');
        setPassword('');
      })    
      
    } else {
      alert("Fill the field");
    }
    
    
    
    dispatch(add({email,password}))

  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">
          Login
          </h2>

        <form onSubmit={enterLogin}>
          <div className="mb-3 text-center fw-bold">
            <HZ_Input
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className='' 
              placeholder='Enter your Email'/>
          </div>
          <div className="mb-3 text-center fw-bold">
            <HZ_Input
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className=''
              placeholder='Enter your password'
            />
          </div>
          {/* <HZ_Button onClick={enterLogin} className='login-button fw-bold' label='Login' type={undefined}/>*/}
          <Button className='w-100 fw-bold' variant='contained' onClick={enterLogin}>Login</Button>
          <p onClick={()=>{navigate('/signup')}} className='mt-4 text-light text-center'>Not have account ? Click to Sign Up</p>
          </form>
      </div>
    </div>
  );
}

export default Login;