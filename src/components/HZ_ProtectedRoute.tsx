import  { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function HZ_Protected({ Component }:any) {

    const [ loader , setLoader ] = useState(true);
    
    const auth = true
    const navigate = useNavigate();

    setTimeout(()=>{
        if (auth) {
            setLoader(false);
        } else {
            navigate('/')
        }
    },2000)

  return (
    <>
    {loader?<div className='fw-bold text-center'>Loading...</div>:<Component/>}
    </>
  )
}

export default HZ_Protected