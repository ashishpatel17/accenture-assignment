import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loggedInUser: undefined,
} ;



export const userStoreSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUser(state,action){
            state.loggedInUser = action.payload.loggedInUser
        }
    }
})



export const getLoggedInUser = (state) => state.loggedInUser;

export const { setUser } = userStoreSlice.actions;

export default userStoreSlice.reducer;