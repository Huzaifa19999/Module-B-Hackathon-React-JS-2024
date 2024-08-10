import { configureStore } from "@reduxjs/toolkit"
import loginReducer from "./reducer/loginReducer";
import signupReducer from "./reducer/signupReducer";


const store = configureStore({

    reducer: {
        
        login:loginReducer,
        signup:signupReducer,
    },
});


export default store