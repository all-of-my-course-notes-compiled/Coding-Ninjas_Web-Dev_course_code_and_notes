import {createSlice} from '@reduxjs/toolkit'
import {actions} from './todoReducer'

const initialState={
    message:""
}

const notificationSlice = createSlice({
    name:'notification',
    initialState,
    reducers:{
        reset: (state, action)=>{
            state.message="";
        }
    },
    // extraReducers:{
    //     "todo/add":(state, action)=>{
    //       state.message="Todo is created";  
    //     }
    // }
    // extraReducers:(builder)=>{
    //     builder.addCase(actions.add, (state, action)=>{
    //         state.message="Todo is created";
    //     })
    // }
    extraReducers:{
        // map objects: [key]: value
        [actions.add]: (state, action)=>{
            state.message="Todo is created";
        }
    }
});

export const notificationReducer = notificationSlice.reducer;

export const resetNotification = notificationSlice.actions.reset;

export const notificationSelector = (state)=>state.notificationReducer.message;
