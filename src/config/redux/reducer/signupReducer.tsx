import { createSlice } from "@reduxjs/toolkit";


const signupSlice = createSlice({

    name:'signup',
    initialState: {

        signupDetail:{
            name:'',
            email:'',
            password:''
                }
    },
    reducers:{
        add:(state:any,action)=>{
            state.loginDetail.name = action.payload.name,
            state.loginDetail.email = action.payload.email,
            state.loginDetail.password = action.payload.password
        },
    },
});

export const { add } = signupSlice.actions

export default signupSlice.reducer