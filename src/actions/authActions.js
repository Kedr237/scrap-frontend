import apiClient from "../api/apiClient";
import { setAccessToken, setRefreshToken, clearTokens } from "../state/authSlice";
import store from "../state/store";
import { REFRESH_URL } from "../helpers/config";

export async function refreshTokens() {
    const { refreshToken } = store.getState().auth;

    if (!refreshToken) {
        return;
    }
    
    try {
        const response = await apiClient.post(REFRESH_URL, { refresh: refreshToken });

        const newAccessToken = response.data.access;
        const newRefreshToken = response.data.refresh;
        store.dispatch(setAccessToken(newAccessToken));
        store.dispatch(setRefreshToken(newRefreshToken));
    } catch (error) {
        console.error("Error refreshing tokens.")
        store.dispatch(clearTokens());
        // window.location.href = "/auth";
        return Promise.reject(error);
    }
};
