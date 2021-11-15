import React from 'react';
import { Link } from 'react-router-dom';

const RegisterButton = ({ registerPiscine, user_id }) => {
  return (
    <div>
      <button className="register-button" onClick={registerPiscine}>
        Register
      </button>
    </div>
  );
};

export default RegisterButton;
