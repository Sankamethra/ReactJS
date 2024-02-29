// Header.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png'; // Import your logo image
import './header.css'; // Import header styles

const Header = () => {
    const navigate = useNavigate();

    const handleAdduserClick = () => {
        // Redirect to the add user page
        navigate('/adduser');
    };

    const handleAddCustomerClick = () => {
        // Redirect to the add user page
        navigate('/addcustomer');
    };

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
                    <li onClick={handleAdduserClick}>Add User</li>
                    <li onClick={handleAddCustomerClick}>Add Customer</li>
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
