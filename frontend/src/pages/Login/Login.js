import { React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PatternLock from 'react-pattern-lock';
import getToken from 'utils/getToken';
import getUserId from 'utils/getUserId';

import './Login.scss';
import axios from 'axios';

const checkValidatePasswordApi = 'http://betti.kr:9000/api/users';

const Login = ({ location }) => {
  const id = location.state.userId;
  const [userInfo, setUserInfo] = useState([]);
  const [path, setPath] = useState([]);
  const [idResult, setIdResult] = useState('');
  const [isFinish, setIsFinish] = useState(false);

  const handleChangePath = (pattern) => {
    setPath(pattern);
  };

  const handleFinish = async () => {
    let pwString = path.join('');
    setPath([]);
    // setIsFinish(true);
    await axios
      .post(checkValidatePasswordApi + '/login', {
        data: {
          id: id,
          password: pwString,
        },
      })
      .then((response) => {
        setUserInfo(response.data);
        setIsFinish(true);
      })
      .catch((error) => {
        alert('로그인에 실패했습니다!');
        setIsFinish(false);
      });
  };

  const tempSetToken = (token) => {
    return token;
  };

  // 삭제해도 되는 코드
  useEffect(() => {
    const fetchId = async () => {
      const response = await getToken();
      const token = await tempSetToken(response.access_token);

      const result = id ? await getUserId(id, token) : 'error';
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
              <h2>{id}</h2>
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
        <Link
          to={{
            pathname: '/main',
            state: { userInfo: userInfo },
          }}
        >
          <div className="modal">로그인 성공!</div>
        </Link>
      )}
    </div>
  );
};

export default Login;
