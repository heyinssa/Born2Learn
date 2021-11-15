import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Entrance.scss';

const Entrance = () => {
  const [userId, setUserId] = useState('');
  const [isEmpty, setIsEmpty] = useState(false);

  const handleChangeId = (e) => {
    setUserId(e.currentTarget.value.replace(/[^A-Za-z0-9]/gi, ''));
  };

  const handleClickLogin = () => {
    setUserId('');
  };

  useEffect(() => {
    if (userId) setIsEmpty(true);
  }, []);

  return (
    <div className="login-page">
      <h1 className="title">Born to Learn</h1>
      <input
        onChange={handleChangeId}
        className="inputid"
        value={userId}
        maxLength="15"
        placeholder={isEmpty ? '아이디를 입력하세요' : ''}
      />
      <Link
        to={{
          pathname: '/login',
          state: {
            userId: userId,
          },
        }}
      >
        <button
          type="button"
          onClick={handleClickLogin}
          className="loginbutton"
        >
          로그인
        </button>
      </Link>
      <Link
        to={{
          pathname: '/register',
          state: {
            userId: userId,
          },
        }}
      >
        <button
          type="button"
          onClick={userId ? handleClickLogin : setIsEmpty(true)}
          className="loginbutton"
        >
          회원가입
        </button>
      </Link>
    </div>
  );
};

export default Entrance;
