import {getUserAPI, getUserByIdAPI, createUserAPI, updateUserAPI, deleteUserByIdAPI} from "../../Api/index"
import { addUserSlice, deleteUserSlice, editUserSlice, fetchData, getUserSlice } from "../Slice/users"
import {call, put, takeEvery} from "redux-saga/effects"
import { CREATE_USERS, DELETE_USERS_BY_ID, GET_USERS, GET_USERS_BY_ID, UPDATE_USERS_BY_ID } from "../Types"
import { setUserSlice } from "../Slice/user"

export function* getUserSaga (){
    console.log('entered')
   const users =  yield call(getUserAPI)
   console.log(users);
    yield put(getUserSlice(users))
}

export function* getUserByIdSaga(id){
     yield getUserByIdAPI(id)
 const user =   yield put(setUserSlice(user))
 }

 export function* createUserSaga(user){
    console.log("I am Called");
     yield createUserAPI(user)
     yield put(addUserSlice(user))
 }

 
 export function* updateUserBySaga(user){
    yield updateUserAPI(user)
     yield put(editUserSlice(user))
 }

 export function * deleteUserByIdSaga(action){
    console.log(action, 'action')
    yield deleteUserByIdAPI(action.user)
     yield put(deleteUserSlice(action.user))
 }

 export function*  watchUserAsync(){

    yield takeEvery(GET_USERS, getUserSaga)
    yield takeEvery(GET_USERS_BY_ID, getUserByIdSaga)
    yield takeEvery(CREATE_USERS, createUserSaga)
    yield takeEvery(UPDATE_USERS_BY_ID, updateUserBySaga)
    yield takeEvery(DELETE_USERS_BY_ID, deleteUserByIdSaga)
 }