import { React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PatternLock from 'react-pattern-lock';
import getToken from 'utils/getToken';
import getUserId from 'utils/getUserId';

import './Login.scss';
import axios from 'axios';

const checkValidatePasswordApi = 'https://www.google.com';

const Login = ({ location }) => {
  const id = location.state.userId;
  const [path, setPath] = useState([]);
  const [idResult, setIdResult] = useState('');
  const [isFinish, setIsFinish] = useState(false);

  const handleChangePath = (pattern) => {
    setPath(pattern);
  };

  const handleFinish = () => {
    const message = `설정한 패턴은 ${path}입니다!`;
    alert(message);
    setPath([]);
    setIsFinish(true);
    // axios
    //   .get(checkValidatePasswordApi)
    //   .then((response) => {
    //     console.log('성공!');
    //     setIsFinish(true);
    //   })
    //   .catch((error) => {
    //     console.log('실패!');
    //     setIsFinish(false);
    //   });
  };

  const tempSetToken = (token) => {
    return token;
  };

  // 삭제해도 되는 코드
  useEffect(() => {
    const fetchId = async () => {
      const response = await getToken();
      const token = await tempSetToken(response.access_token);

      console.log('token');
      console.log(token);

      const result = await getUserId(id, token);
      console.log(result);
      setIdResult(result);
    };
    fetchId();
  }, []);
  // 삭제해도 되는 코드

  useEffect(() => {
    console.log(path);
  }, [path]);
  return (
    <div className="login-page">
      {idResult && (
        <>
          {idResult !== 'error' ? (
            <>
              <h1 className="title">WMPB</h1>
              <h1>id : {id}</h1>
              <PatternLock
                width={300}
                pointSize={15}
                size={3}
                path={path}
                onChange={(pattern) => {
                  handleChangePath(pattern);
                }}
                onFinish={handleFinish}
              />
            </>
          ) : (
            <Link to="/">
              <div>존재하지 않는 아이디! 클릭해서 돌아가세요!</div>
            </Link>
          )}
        </>
      )}
      {isFinish && (
        <Link to="/main">
          <div className="modal">로그인 성공!</div>
        </Link>
      )}
    </div>
  );
};

export default Login;
