import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Entrance.scss';
import { useHistory } from 'react-router';

const Entrance = () => {
  const [userId, setUserId] = useState('');
  const [isEmpty, setIsEmpty] = useState(false);
  const history = useHistory();

  const handleChangeId = (e) => {
    setUserId(e.currentTarget.value.replace(/[^A-Za-z0-9]/gi, ''));
  };

  const handleClickLogin = () => {
    if (userId == '') setIsEmpty(true);
    else {
      setUserId('');
      history.push({
        pathname: '/login',
        state: { userId },
      });
    }
  };

  const handleClickRegister = () => {
    if (userId == '') setIsEmpty(true);
    else {
      setUserId('');
      history.push({
        pathname: '/register',
        state: { userId },
      });
    }
  };

  const onKeyPress = (e) => {
    if (e.key == 'Enter') handleClickLogin();
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
        onKeyPress={onKeyPress}
        maxLength="15"
        placeholder={isEmpty ? '아이디 입력!' : ''}
      />
      <button type="button" onClick={handleClickLogin} className="loginbutton">
        로그인
      </button>
      <button
        type="button"
        onClick={handleClickRegister}
        className="loginbutton"
      >
        회원가입
      </button>
    </div>
  );
};

export default Entrance;
