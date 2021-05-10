import { createSlice } from '@reduxjs/toolkit'

//lets create an initial state for our user..when the app starts, user will be empty
const initialState = {
    name: "",
    email: "",
    photo: "",
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        //reducer just takes states of your app and applies them to your variable.. so below we have two states, sign in state and sign out state
        //the setUserLoginDetails reducer takes the action paremeter we pass to it and sets the current state of that variable to the param we passed
        setUserLoginDetails: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.photo = action.payload.photo;
        },
        // the setSignOurState reducer set all states to null when the user logs out. which takes the current state as param and sets it to null

        setSignOutState: (state) => {
            state.name = null;
            state.email = null;
            state.photo = null;
        }
    },
})

//not we need to export all the variable to be used our top lavel app
export const { setUserLoginDetails, setSignOutState } = userSlice.actions;
 
//now we export a function to be called by any of our files or conponents to access all the variables in our reducer...we just call the  function.

export const selectUserName = (state) => state.user.name;
export const selectUserEmail = (state) => state.user.email;
export const selectUserPhoto = (state) => state.user.photo;


//exporting our userSlice as a reducer to be added to our store.js reducer.
export default userSlice.reducer;