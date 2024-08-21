// import Approuter from "./config/router"
import 'bootstrap/dist/css/bootstrap.css'
import Approuter from './config/router'
import {  useSelector } from 'react-redux'



function App() {

  const dataFromStore = useSelector((state:any) => state.loginReducer);
  console.log(dataFromStore);

  return (
   
   <>
      {/* <Home/> */}
    <Approuter/>  
   </>
   
  )
}

export default App