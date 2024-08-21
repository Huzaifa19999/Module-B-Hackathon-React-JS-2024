import { BrowserRouter, Route, Routes } from "react-router-dom"
// import Login from "../screens/login/login"
import Signup from "../screens/signup/signup"
import Protected from "../components/HZ_ProtectedRoute"
// import Dashboard from "../screens/dashboard/dashboard"
import Home from "../screens/home/home"
import AdminLogin from "../screens/login/adminlogin"
import Stafflogin from "../screens/login/stafflogin"
import Customerlogin from "../screens/login/login"
import Managerlogin from "../screens/login/managerlogin"
import AdminDashboard from "../screens/dashboard/admindashboard"
import StaffDashboard from "../screens/dashboard/staffdashboard"
import ManagerDashboard from "../screens/dashboard/managerdashboard"
import Dashboard from "../screens/dashboard/dashboard"


function Approuter() {

  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/customerlogin" element={<Customerlogin/>}></Route>
    <Route path="/managerlogin" element={<Managerlogin/>}></Route>
    <Route path="/stafflogin" element={<Stafflogin/>}></Route>
    <Route path="/adminlogin" element={<AdminLogin/>}></Route>
    <Route path="/signup" element={<Signup/>}></Route>
    {/* <Route path="/dashboard/*" element={<Protected Component={Dashboard}/>}></Route> */}
    <Route path="/dashboard/admin/*" element={<Protected Component={AdminDashboard}/>}></Route>
    <Route path="/dashboard/customer/*" element={<Protected Component={Dashboard}/>}></Route>
    <Route path="/dashboard/manager/*" element={<Protected Component={ManagerDashboard}/>}></Route>
    <Route path="/dashboard/staff/*" element={<Protected Component={StaffDashboard}/>}></Route>
    </Routes>
    </BrowserRouter>
    
  )
}

export default Approuter