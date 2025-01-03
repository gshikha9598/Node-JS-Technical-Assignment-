import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Assuming you add custom styles for the header here

function Header() {
    return (
        <header className="header">
            <div className="logo">
                <Link to="/">Login System</Link>
            </div>
            <nav className="nav">
                <ul>
                    <li>
                        <Link to="/">Login</Link>
                    </li>
                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
