import Cookies from "js-cookie";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    accessToken: "",
    refreshToken: Cookies.get("refreshToken") || "",
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAccessToken: (state, action) => {
            state.accessToken = action.payload;
        },
        setRefreshToken: (state, action) => {
            state.refreshToken = action.payload;
            Cookies.set("refreshToken", action.payload, { expires: 15, path: "" });
        },
        clearTokens: (state) => {
            state.accessToken = "";
            state.refreshToken = "";
            Cookies.remove("refreshToken"); 
        },
    },
});

export const { setAccessToken, setRefreshToken, clearTokens } = authSlice.actions;

export default authSlice.reducer;