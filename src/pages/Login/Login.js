import { React, useState } from 'react';

import './Login.scss';

const Login = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeId = e => {
    setId(e.currentTarget.value);
  };
  const handleChangePassword = e => {
    setPassword(e.currentTarget.value);
  };

  const handleClickLogin = () => {
    console.log(id, password);
    setId('');
    setPassword('');
  };
  return (
    <div className="login-page">
      <h1 className="title">WMPB</h1>
      <input onChange={handleChangeId} value={id} />
      <input onChange={handleChangePassword} value={password} />
      <button type="button" onClick={handleClickLogin}>
        로그인
      </button>
    </div>
  );
};

export default Login;
