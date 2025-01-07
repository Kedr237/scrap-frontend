import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import notesReducer from "./notesSlice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        notes: notesReducer,
    },
});

export default store;