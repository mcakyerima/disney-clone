import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
//import the userReducer we created in our feature folder where we create variable to store our useLogin states]
import  userReducer  from '../features/user/userSlice'
//create a reducer for our store.. this is just a boiler plate code from redux api toolkit documentation
export default configureStore({
    reducer: {
        user: userReducer,
    },
    middleware : getDefaultMiddleware({
        serializableCheck: false,
    })
})