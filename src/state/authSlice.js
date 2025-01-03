import Cookies from "js-cookie";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    accessToken: Cookies.get("accessToken") || "",
    refreshToken: Cookies.get("refreshToken") || "",
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAccessToken: (state, action) => {
            state.accessToken = action.payload;
            Cookies.set("accessToken", action.payload, { expires: 1/24, path: "" });
        },
        setRefreshToken: (state, action) => {
            state.refreshToken = action.payload;
            Cookies.set("refreshToken", action.payload, { expires: 15, path: "" });
        },
        ClearTokens: (state) => {
            state.accessToken = "";
            state.refreshToken = "";
            Cookies.remove("accessToken");
            Cookies.remove("refreshToken");
        },
    },
});

export const { setAccessToken, setRefreshToken, ClearTokens } = authSlice.actions;

export default authSlice.reducer;