import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { alreadySignInUser, editPassword } from "../config/firebase/firebaseMethod"
import { Button } from "@mui/material"



function LMS_NewPassword() {

    const [ inputData, setInputData ] = useState<any>()
    const navigate = useNavigate()
    const checking = () => {
        alreadySignInUser().then(()=>{

        })
        .catch((err:any)=>{
            if( err == 0 ) {
                navigate('/login')
            }
        })
    }

    useEffect(checking,[])

    const inputChange = (e:any) => {
        setInputData((prev:any)=>({...prev,[e.target.id]:e.target.value}))
    }

  return (
    <>
    <h1>Type Below to Change Password</h1>
    <br />
    <input className="form-control" type="password" placeholder="Enter new Password" id="newPass" onChange={(e)=>{inputChange(e)}} />
    <br />
    <Button variant="contained" onClick={()=>{editPassword(inputData.newPass)}}>Submit</Button>
    </>
  )
}

export default LMS_NewPassword