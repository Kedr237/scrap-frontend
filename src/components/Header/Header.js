import { useDispatch, useSelector } from "react-redux";
import { clearTokens } from "../../state/authSlice";

import { useNavigate } from "react-router-dom";

import "./Header.css";

function Header() {
    const refreshToken = useSelector((state) => state.auth.refreshToken);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleLogout(event) {
        event.preventDefault();
        const confirmed = window.confirm("Are you sure you want to logout?");
        if (confirmed) {
            dispatch(clearTokens());
            navigate("/auth");
        }
    };


    return (
        <header className="Header">
            <div className="container">
                <ul className="Header__list">
                    <li>
                        <a href="/" className="Header__link">Notes</a>
                    </li>
                    <li>
                        {
                            refreshToken ? (
                                <a href="auth" className="Header__link Header__link_logout border-parent"
                                onClick={handleLogout}>
                                    Logout
                                    <div className="border-child"></div>
                                </a>
                            ) : (
                                <a href="auth" className="Header__link border-parent">
                                    Auth
                                    <div className="border-child"></div>
                                </a>
                            )
                        }
                    </li>
                </ul>
            </div>
        </header>
    );
}


export default Header;
