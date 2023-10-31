import { createSlice, current } from "@reduxjs/toolkit";

const users = createSlice({
    name: 'users',
    initialState: [{
        id: 0,
        name: '',
        email: '',
        username: ''
    }],
    reducers: {
        fetchData: (state,action) =>{
            console.log('fetch Called')
        },
        getUserSlice:(state,action) => {
            // state = action.payload
            state = action.payload
            return state
        },
        addUserSlice: (state,action) => {
            console.log(action.payload, 'add user')

             state.data.push(action.payload.user)
             return state
            },

            editUserSlice: (state,action) => {
               state.data = state.data.map(i=>i.id == action.payload.id )
               },
               deleteUserSlice: (state,action) => {
                state.data = state.data.filter(i=>i.id !== action.payload.id)
               } 

    }
})
export const {getUserSlice,fetchData, addUserSlice, editUserSlice, deleteUserSlice} = users.actions
export default users.reducer