
// import {ADD_NOTE, DELETE_NOTE} from "../actions/noteActions";

const { createSlice } = require("@reduxjs/toolkit");


const initialState={
    notes:[{text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam'
    , createdOn: new Date().toDateString()},
    {text:'Aliquam erat volutpat. Ut tincidunt, velit vel aliquam commodo, tellus urna auctor tortor, non ultrices libero ante sed magna.'
    , createdOn: new Date().toDateString()}]
};


const noteSlice = createSlice({
    name:'note',
    initialState:initialState,
    reducers:{
        // this is add action
        add:(state, action)=>{
                state.notes.push({
                    text:action.payload,
                    createdOn: new Date().toDateString()
                })
        },
        delete:(state, action)=>{
            state.notes.splice(action.payload,1);
        }
    }
});

export const noteReducer=noteSlice.reducer;
export const actions = noteSlice.actions;

// selector

export const noteSelector = (state)=>state.noteReducer.notes;


// export function noteReducer(state=initialState, action){
//     switch(action.type){
//         case ADD_NOTE:
//             return {
//                 ...state,
//                 notes:[
//                     ...state.notes,
//                     {
//                         text:action.text,
//                         createdOn: new Date()
//                     }
//                 ]
//             }
//         case DELETE_NOTE:
//             state.notes.splice(action.index,1);
//             console.log(state.notes);
//             return{
//                 ...state,
//                 notes: [...state.notes]
//             }
//         default:
//             return state;
//     }
// }