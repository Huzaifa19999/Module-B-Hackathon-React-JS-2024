import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import './signup.css'
import { useNavigate } from 'react-router-dom';
// import HZ_Button from '../../components/HZ_Button';
import { sendData , signUpUser } from '../../config/firebase/firebaseMethod';
import { Button } from '@mui/material';
import HZ_Input from '../../components/HZ_Input';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../../config/redux/reducer/loginReducer';

function Signup() {
  const [name, setName] = useState<any>('');
  const [email, setEmail] = useState<any>('');
  const [password, setPassword] = useState<any>('');
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const signupDetails = useSelector((a:any)=>a.signup.signupDetail)
  console.log(signupDetails)


  const enterLogin = (e: any) => {
    e.preventDefault();
    if (name && email && password) {
      let obj = {
        Name:name,
        Email: email,
        Password: password
      };

      signUpUser(name,email,password)
      
      sendData('Signup', obj)
      .then((res) => {
        console.log("Successfully Added", res);
        navigate('/home/user');
        alert("Successfully Log In");
      })
      .catch((err) => {
        console.log("Data not Added", err);
        alert("Login failed");
      });
      setName('');
      setEmail('');
      setPassword('');
    } else {
      alert("Fill the field");
    }

    dispatch(add({name,email,password}))

  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">
          Sign Up
          </h2>

        <form onSubmit={enterLogin}>
          <div className="mb-3 text-center fw-bold">
            <HZ_Input
              label="User name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className='' 
              placeholder='Enter your Email'/>
          </div>
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
          <p onClick={()=>{navigate('/')}} className='mt-4 text-light text-center'>Already have account ? Click to Log In</p>

          </form>
      </div>
    </div>
  );
}

export default Signup;