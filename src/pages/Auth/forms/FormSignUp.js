import apiClient from "../../../api/apiClient";
import { useState } from "react";
import { SIGN_UP_URL } from "../../../helpers/config";
import "./form.css";

function FormSignUp({ setSuccessMessage, setActiveForm }) {
    const [errors, setErrors] = useState({});

    async function handleSignUp(event) {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        
        try {
            const response = await apiClient.post(SIGN_UP_URL, formData);
            console.log("Response:", response.data);
            form.reset();
            setErrors({});
            setSuccessMessage("Registration successful.");
            setActiveForm("FormSignIn");
        } catch (error) {
            if (error.response && error.response.data) {
                setErrors(error.response.data);
                setSuccessMessage("");
            } else {
                console.error("Error:", error);
            }
        }
    }

    return (
        <form className="FormSignUp Auth__form" method="POST" onSubmit={handleSignUp}>

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
                <label htmlFor="auth-email">Email:</label>
                <input id="auth-email" type="email" name="email" autoComplete="new-email" />
                {errors.email && (
                    <ul className="Auth__error-messages">
                        {errors.email.map((error, index) => (
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
            </div>

            <button className="Auth__submit-btn border-parent background-parent" type="submit">
                    Submit
                    <div className="border-child"></div>
                    <div className="background-child"></div>
            </button>

        </form>
    );
}

export default FormSignUp;
