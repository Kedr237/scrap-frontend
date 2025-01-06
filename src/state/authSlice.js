import Cookies from "js-cookie";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    accessToken: sessionStorage.getItem("accessToken"),
    refreshToken: Cookies.get("refreshToken") || "",
    authenticated: sessionStorage.getItem("accessToken") ? true : false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAccessToken: (state, action) => {
            state.accessToken = action.payload;
            sessionStorage.setItem("accessToken", action.payload);
            state.authenticated = true;
        },
        setRefreshToken: (state, action) => {
            state.refreshToken = action.payload;
            Cookies.set("refreshToken", action.payload, { expires: 15, path: "" });
        },
        clearTokens: (state) => {
            state.accessToken = "";
            state.refreshToken = "";
            state.authenticated = false;
            Cookies.remove("refreshToken"); 
            sessionStorage.removeItem("accessToken");
        },
    },
});

export const { setAccessToken, setRefreshToken, clearTokens } = authSlice.actions;

export default authSlice.reducer;