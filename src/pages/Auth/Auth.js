import { useState, useEffect } from "react";

import FormSignIn from "./forms/FormSignIn";
import FormSignUp from "./forms/FormSignUp";

import "./Auth.css";


function Auth() {
    const [activeForm, setActiveForm] = useState("FormSignIn")

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


    return (
        <div className="Auth">
            <div className="container">
                <ul className="Auth__options">

                    <li className={`Auth__signIn ${activeForm === "FormSignIn" ? "active-form-type" : ""}`}
                    onClick={() => setActiveForm("FormSignIn")}>
                        Sign In
                    </li>

                    <li className={`Auth__signUp border-parent ${activeForm === "FormSignUp" ? "active-form-type" : ""}`}
                    onClick={() => setActiveForm("FormSignUp")}>
                        Sign Up
                        <div className="border-child"></div>
                    </li>
                    
                </ul>

                {activeForm === "FormSignIn" && <FormSignIn />}
                {activeForm === "FormSignUp" && <FormSignUp setSuccessMessage={setSuccessMessage} setActiveForm={setActiveForm} />}

                {
                    successMessage &&
                    <div className={`Auth__success-message ${fadeOut ? "fade-out" : ""}`}>
                        {successMessage}
                    </div>
                }

            </div>
        </div>
    );
}


export default Auth;
