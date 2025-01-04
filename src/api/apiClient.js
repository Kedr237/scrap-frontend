import axios from "axios";
import { setAccessToken, setRefreshToken, clearTokens } from "../state/authSlice";
import store from "../state/store";
import { BACKEND_API, REFRESH_URL } from "../helpers/config";
import { refreshTokens } from "../actions/authActions";

const apiClient = axios.create({
    baseURL: `${BACKEND_API}`,
    headers: { "Content-Type": "application/json" },
});

apiClient.interceptors.request.use(
    (config) => {
        const { accessToken } = store.getState().auth;
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => Promise.reject(error),
);

apiClient.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;
        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            try {
                await refreshTokens();
                const { accessToken } = store.getState().auth;
                originalRequest.headers.Authorization = `Bearer ${accessToken}`;
                return apiClient(originalRequest);
            } catch (refreshError) {
                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error);
    }
);

export default apiClient;
