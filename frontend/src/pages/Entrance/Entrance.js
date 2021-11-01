import { React, useState } from 'react';
import { Link } from 'react-router-dom';

import './Entrance.scss';

const Entrance = () => {
  const [userId, setUserId] = useState('');

  const handleChangeId = (e) => {
    setUserId(e.currentTarget.value.replace(/[^A-Za-z]/gi, ''));
  };

  const handleClickLogin = () => {
    console.log(userId);
    setUserId('');
  };

  return (
    <div className="login-page">
      <h1 className="title">WMPB</h1>
      <input onChange={handleChangeId} className="inputid" value={userId} maxLength="10" />
      <Link
        to={{
          pathname: '/login',
          state: {
            userId: userId,
          },
        }}
      >
        <button type="button" onClick={handleClickLogin} className="loginbutton">
          로그인
        </button>
      </Link>
    </div>
  );
};

export default Entrance;
