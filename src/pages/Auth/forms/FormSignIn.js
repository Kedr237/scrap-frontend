import axios from "axios";
import { SIGN_IN_URL } from "../../../core/config";
import "./form.css";

function FormSignIn() {

    async function handleSignIn(event) {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        
        try {
            const response = await axios.post("", formData);
            console.log("Response:", response.data)
        } catch (error) {
            console.error("Error:", error);
        }

    }

    return (
        <form className="FormSignIn Auth__form" action="#" method="POST">

            <div className="Auth__input-block">
                <label for="auth-username">Username:</label>
                <input id="auth-username" type="text" name="username" autoComplete="new-username" />
            </div>

            <div className="Auth__input-block">
                <label for="auth-email">Email:</label>
                <input id="auth-email" type="email" name="email" autoComplete="new-email" />
            </div>

            <div className="Auth__input-block">
                <label for="auth-password">Password:</label>
                <input id="auth-password" type="password" name="password" autoComplete="new-password" />
            </div>

            <div>
                <button className="Auth__submit-btn" type="submit">Submit</button>
            </div>

        </form>
    );

}

export default FormSignIn;