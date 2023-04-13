import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "../feutures/AuthSlice";
import LinksSlice from "../feutures/LinksSlice";
// import authSlice from "../features/auth/authSlice";
// import goalSlice from "../features/goals/goalSlice";



export const store = configureStore({
    reducer: {
        auth: AuthSlice,
        link: LinksSlice
        // goals: goalSlice
    },
})