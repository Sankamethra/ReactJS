// src/components/Signup.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './signup.css';

const Signup = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
      // Redirect to the login page
      navigate('/login');
    };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2 className="signup-heading">Signup</h2>

        {/* Details Container */}
        <div className="details-container">
          {/* Row 1 */}
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input type="text" id="fullName" name="fullName" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email" />
          </div>

          <div className="form-group">
            <label htmlFor="password">Set Password</label>
            <input type="text" id="password" name="password" />
          </div>

          <div className="form-group">
            <label htmlFor="role">Role in the Company</label>
            <input type="text" id="role" name="role" />
          </div>

          {/* Row 2 */}
          <div className="form-group">
            <label htmlFor="company">Company</label>
            <input type="text" id="company" name="company" />
          </div>

          <div className="form-group">
            <label htmlFor="mobile">Mobile</label>
            <input type="text" id="mobile" name="mobile" />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="text" id="confirmPassword" name="confirmPassword" />
          </div>

          <div className="form-group">
            <label htmlFor="location">Location</label>
            <input type="text" id="location" name="location" />
          </div>
        </div>

        {/* Submit Button */}
        <button type="submit">Submit</button>
        <div className="login-container">
            <h4 className="signup-heading" onClick={handleLoginClick}>
                Have an Account? Login
            </h4>
       </div>

      </div>
    </div>
  );
};

export default Signup;
