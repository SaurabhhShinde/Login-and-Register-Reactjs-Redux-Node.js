import {createSlice} from "@reduxjs/toolkit";

const UserData = JSON.parse(localStorage.getItem('userLog'));


export const userSlice = createSlice({
    name:"user",
    initialState:{
        user: UserData ? UserData :null
        
    },
    reducers:{
        login:(state, action) => {
            state.user = action.payload;
            localStorage.setItem('userLog', JSON.stringify(action.payload));
        },
        logout:(state) => {
            state.user = null;
            localStorage.removeItem('userLog');
        },
    },
});

export const {login, logout} = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
