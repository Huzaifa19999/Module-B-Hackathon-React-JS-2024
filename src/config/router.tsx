import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "../screens/login/login"
import Signup from "../screens/signup/signup"
import Protected from "../components/HZ_ProtectedRoute"


function Approuter() {

  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login/>}></Route>
    <Route path="/signup" element={<Signup/>}></Route>
    <Route path="/home/*" element={<Protected Component={Login}/>}></Route>
    </Routes>
    </BrowserRouter>
    
  )
}

export default Approuter