import apiClient from "../../../api/apiClient";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAccessToken, setRefreshToken } from "../../../state/authSlice";
import { SIGN_IN_URL } from "../../../helpers/config";
import "./form.css";

function FormSignIn() {
    const [errors, setErrors] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    async function handleSignUp(event) {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        
        try {
            const response = await apiClient.post(SIGN_IN_URL, formData);
            dispatch(setAccessToken(response.data.access));
            dispatch(setRefreshToken(response.data.refresh));
            form.reset();
            setErrors({});
            navigate("/");
        } catch (error) {
            if (error.response && error.response.data) {
                setErrors(error.response.data);
            } else {
                console.error("Error:", error);
            }
        }
    }

    return (
        <form className="FormSignIn Auth__form" method="POST" onSubmit={handleSignUp}>

            <div className="Auth__input-block">
                <label htmlFor="auth-username">Username:</label>
                <input id="auth-username" type="text" name="username" autoComplete="new-username" />
                {errors.username && (
                    <ul className="Auth__error-messages">
                        {errors.username.map((error, index) => (
                            <li key={index} className="Auth_error-message">{error}</li>
                        ))}
                    </ul>
                )}
            </div>

            <div className="Auth__input-block">
                <label htmlFor="auth-password">Password:</label>
                <input id="auth-password" type="password" name="password" autoComplete="new-password" />
                {errors.password && (
                    <ul className="Auth__error-messages">
                        {errors.password.map((error, index) => (
                            <li key={index} className="Auth_error-message">{error}</li>
                        ))}
                    </ul>
                )}
                {errors.detail && (
                    <ul className="Auth__error-messages">
                        <li className="Auth_error-message">{errors.detail}</li>
                    </ul>
                )}
            </div>

            <div>
                <button className="Auth__submit-btn border-parent background-parent" type="submit">
                    Submit
                    <div className="border-child"></div>
                    <div className="background-child"></div>
                </button>
            </div>

        </form>
    );
}

export default FormSignIn;
