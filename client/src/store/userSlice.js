import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'appUser',
    initialState: {
        user: null, // default value for app
        
        // user: {                     //to test
        //     id: "1123245kglerk",
        //     name: "andrei",
        //     email: "Titka@mail.com",
        // }
    },
    reducers: {

        setUser(state, action){
            state.user = {
                id: action.payload._id,
                name: action.payload.name,
                email: action.payload.email,
            }
        },
        deleteUser(state, action){
            state.user = null;
        }
    },
});

export const {setUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;