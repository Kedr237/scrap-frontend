import { useState, useEffect } from "react";
import axios from "axios";
import { SIGN_UP_URL } from "../../../core/config";
import "./form.css";

function FormSignUp() {

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState("");
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        if (successMessage) {
            const timer = setTimeout(() => {
                setFadeOut(true);
                setTimeout(() => setSuccessMessage(""), 500);
            }, 10000);
            return () => clearTimeout(timer);
        }
    }, [successMessage]);

    async function handleSignUp(event) {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        
        try {
            const response = await axios.post(SIGN_UP_URL, formData);
            console.log("Response:", response.data);
            form.reset();
            setErrors({});
            setSuccessMessage("Registration successful.");
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

            <div>
                <button className="Auth__submit-btn" type="submit">Submit</button>
            </div>

            {successMessage &&
                <div className={`Auth__success-message ${fadeOut ? "fade-out" : ""}`}>
                    {successMessage}
                </div>
            }

        </form>
    );
}

export default FormSignUp;