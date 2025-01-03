import { useDispatch, useSelector } from "react-redux";
import { ClearTokens } from "../../state/authSlice";

import { useNavigate } from "react-router-dom";

import "./Header.css";

function Header() {
    const accessToken = useSelector((state) => state.auth.accessToken);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleLogout(event) {
        event.preventDefault();
        const confirmed = window.confirm("Are you sure you want to logout?");
        if (confirmed) {
            dispatch(ClearTokens());
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
                            accessToken ? (
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
