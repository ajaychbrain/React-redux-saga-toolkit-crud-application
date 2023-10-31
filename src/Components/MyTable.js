import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUserSlice } from '../Redux/Slice/user';
import { deleteUserSlice, editUserSlice, fetchData } from '../Redux/Slice/users';
import { DELETE_USERS_BY_ID, GET_USERS } from '../Redux/Types';

const MyTable = () => {

  const userData =  useSelector(state => state.users)
  console.log(userData)
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch({type: GET_USERS})
  },[])

  return (
    <div>
      <table className="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">UserName</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    {
      userData?.data?.map((item,id)=>{
        return (
          <>
          <tr key={id}>
      <th scope="row">{id + 1}</th>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.username}</td>
        <td>  <button className='btn btn-success' onClick={()=>dispatch(editUserSlice(item))}>Edit</button></td>
      <td><button className='btn btn-danger'
       onClick={()=>dispatch({type: DELETE_USERS_BY_ID, user: item})}
       >
        Delete</button></td>
    </tr>
          
          </>
        )
      })
    }
   
  </tbody>
</table>
    </div>
  )
}

export default MyTable
