// import Approuter from "./config/router"
import 'bootstrap/dist/css/bootstrap.css'
import Approuter from './config/router'
import { Provider } from 'react-redux'
import store from './config/redux/store'



function App() {


 
  

  return (
   
   <>
   <Provider store={store}>

    <Approuter/>  
   </Provider>
   </>
   
  )
}

export default App