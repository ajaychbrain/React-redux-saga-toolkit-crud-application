import { configureStore, getDefaultMiddleware} from "@reduxjs/toolkit"
import user from "./Redux/Slice/user"
import users from "./Redux/Slice/users"
import createSagaMiddleware from "redux-saga";
import {rootSaga} from "./Redux/Saga"
import { watchUserAsync } from "./Redux/Saga/user";
const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: {
         user,
         users
    },
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware({thunk: false}).concat(sagaMiddleware)

})
sagaMiddleware.run(watchUserAsync)

export default store