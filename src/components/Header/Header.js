import "./Header.css";

function Header() {
    return (
        <header className="Header">
            <div className="container">
                <ul className="Header__list">
                    <li>
                        <a href="/" className="Header__link">Notes</a>
                    </li>
                    <li>
                        <a href="auth" className="Header__link">Sign In/Up</a>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
