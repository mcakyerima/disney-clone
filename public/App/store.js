import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

//create a reducer for our store.. this is just a boiler plate code from redux api toolkit documentation
export default configureStore({
    reducer: {},
    middleware : getDefaultMiddleware({
        serializableCheck: false,
    })
})