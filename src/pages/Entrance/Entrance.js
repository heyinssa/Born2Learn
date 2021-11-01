import { React, useState } from 'react';
import { Link } from 'react-router-dom';

import './Entrance.scss';

const Entrance = () => {
  const [id, setId] = useState('');

  const handleChangeId = e => {
    setId(e.currentTarget.value.replace(/[^A-Za-z]/gi, ''));
  };

  const handleClickLogin = () => {
    console.log(id);
    setId('');
  };
  return (
    <div className="login-page">
      <h1 className="title">WMPB</h1>
      <input onChange={handleChangeId} value={id} maxLength="10" />
      <Link
        to={{
          pathname: '/login',
          state: {
            userId: id,
          },
        }}
      >
        <button type="button" onClick={handleClickLogin}>
          로그인
        </button>
      </Link>
    </div>
  );
};

export default Entrance;
