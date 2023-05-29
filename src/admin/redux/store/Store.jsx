import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "../feutures/AuthSlice";
import LinksSlice from "../feutures/LinksSlice";



export const store = configureStore({
    reducer: {
        auth: AuthSlice,
        link: LinksSlice
        // goals: goalSlice
    },
})