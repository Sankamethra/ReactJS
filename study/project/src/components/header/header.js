// Header.js
import React from 'react';
import logo from '../assets/logo.png'; // Import your logo image
import './header.css'; // Import header styles

const Header = () => {
    return (
        <header className="header">
            <div className="logo-container">
                <img src={logo} alt="Logo" className="logo" />
            </div>
            <div className="heading-container">
                <h1 className="heading">Ledger Ease</h1>
            </div>
            <nav classname="menu-bar">
                <ul className="menu">
                    <li>Add User</li>
                    <li>Add Customer</li>
                    <li>Upload Invoice</li>
                    <li>Show Transactions</li>
                </ul>
            </nav>
            <div className="profile-icon">
                {/* Add your profile icon component or image here */}
            </div>
        </header>
    );
};

export default Header;
