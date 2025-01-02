import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    accessToken: "",
    refreshToken: "",
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAccessToken: (state, action) => {
            state.accessToken = action.payload;
        },
        setRefreshToken: (state, action) => {
            state.refreshToken = action.payload;
        },
        ClearTokens: (state) => {
            state.accessToken = "";
            state.refreshToken = "";
        },
    },
});

export const { setAccessToken, setRefreshToken, ClearTokens } = authSlice.actions;

export default authSlice.reducer;