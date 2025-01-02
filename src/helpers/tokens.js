import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { setAccessToken, setRefreshToken, ClearTokens } from "../state/authSlice";

import { SIGN_IN_URL } from "./config";


function useTokens() {
    const dispatch = useDispatch();

    async function getTokens(formData) {
        const response = await axios.post(SIGN_IN_URL, formData);
        console.log("Update tokens:", response.data);
        dispatch(setAccessToken(response.data.access));
        dispatch(setRefreshToken(response.data.refresh));
    };

    return { getTokens };
};


export default useTokens;