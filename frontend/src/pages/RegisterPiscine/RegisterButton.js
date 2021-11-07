import React from 'react';

const RegisterButton = ({ registerPiscine }) => {
  return (
    <div>
      <button className="register-button" onClick={registerPiscine}>
        Register
      </button>
    </div>
  );
};

export default RegisterButton;
