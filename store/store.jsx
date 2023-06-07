import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";

export const store = configureStore({
    reducer:{
        auth: authSlice

    }
});

// remember that slices are pieces of reducer logic.