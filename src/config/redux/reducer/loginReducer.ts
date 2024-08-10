import { createSlice } from "@reduxjs/toolkit";


const loginSlice = createSlice({

    name:'login',
    initialState: {

        auth:true,
        loginDetail:{
            email:'',
            password:''
                }
    },
    reducers:{
        add:(state:any,action)=>{
            state.loginDetail.email = action.payload.email,
            state.loginDetail.password = action.payload.password
        },
    },
});

export const { add } = loginSlice.actions

export default loginSlice.reducer