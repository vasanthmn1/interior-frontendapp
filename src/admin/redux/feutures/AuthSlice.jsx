import { createSlice } from '@reduxjs/toolkit'

const user = JSON.parse(localStorage.getItem('user'))


const initialState = {
    user: user ? user : null,
    isLoadind: false,
    isError: false,
}



const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginStart: (state) => {
            state.isLoadind = true
        },
        loginSuccess: (state, action) => {
            state.isLoadind = true
            state.user = action.payload
        },
        loginFaluire: (state) => {
            state.isLoadind = false
            state.isError = true
        },
        logout: (state, action) => {
            localStorage.removeItem('user')
            state.user = null;
            state.isLoadind = false;
            state.isError = false;
        },
    }
})

export const { loginStart, loginFaluire, loginSuccess, logout } = AuthSlice.actions

export default AuthSlice.reducer