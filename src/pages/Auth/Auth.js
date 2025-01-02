import { useState } from "react";

import FormSignIn from "./forms/FormSignIn";
import FormSignUp from "./forms/FormSignUp";

import "./Auth.css";


function Auth() {
    const [activeForm, setActiveForm] = useState("FormSignIn")


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
                {activeForm === "FormSignUp" && <FormSignUp />}

            </div>
        </div>
    );
}


export default Auth;
