import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUserSlice } from '../Redux/Slice/user'
import { addUserSlice, editUserSlice } from '../Redux/Slice/users'
import { nanoid } from '@reduxjs/toolkit'
import { CREATE_USERS, UPDATE_USERS_BY_ID } from '../Redux/Types'

const MyForm = () => {

    // const [user, setUser] = useState({
    //     id: 0,
    //     name:'',
    //     email: '',
    //     username: ''
    // })
    const user = useSelector(state=>state.user)
    const dispatch = useDispatch()
    const handleChange = (prop)=>(e) =>{
        dispatch(setUserSlice({
            ...user, [prop]: e.target.value
        }))
        
    }

    const handleSubmit = ()=> {
        // user.id === 0 ? dispatch(addUserSlice({ ...user, id: nanoid(8)})): dispatch(editUserSlice(user))
        user.id === 0 ? dispatch({type: CREATE_USERS, user:{ ...user, id: nanoid(8)}}): dispatch({type: UPDATE_USERS_BY_ID, user})
        dispatch(setUserSlice({
            id:0,
            name: '',
            email: '',
            username: ''
        }))
    }


  return (
         <>
         <div className='container'>
            <input  className='form-control' disabled/><br/><br/>
            <input value={user.name} onChange={handleChange('name')} className='form-control' placeholder='Enter Name' /><br/><br/>
            <input value={user.email} onChange={handleChange('email')} className='form-control' placeholder='Enter Email' /><br/><br/>
            <input value={user.username} onChange={handleChange('username')} className='form-control' placeholder='Enter username' /><br/><br/>
            <button className='btn btn-primary' onClick={()=>handleSubmit()}>Submit</button>
         </div>
         
         </>
    
  )
}

export default MyForm
