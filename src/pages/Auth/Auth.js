import FormSignIn from "./forms/FormSignIn";
import FormSignUp from "./forms/FormSignUp";
import "./Auth.css";

function Auth() {
    return (
        <div className="Auth">
            <div className="container">
                <ul className="Auth__options">
                    <li className="Auth__signIn">Sign In</li>
                    <li className="Auth__signUp">Sign Up</li>
                </ul>

                <FormSignUp />

            </div>
        </div>
    );
}

export default Auth;
