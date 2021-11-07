import { React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PatternLock from 'react-pattern-lock';
import getToken from 'utils/getToken';
import getUserId from 'utils/getUserId';
import Loader from './Loader';

import './Login.scss';
import axios from 'axios';

const checkValidatePasswordApi = 'http://betti.kr:9000/api/users';

const Login = ({ location }) => {
  const [errorMessage, setErrorMessage] = useState('');
  const id = location.state.userId;
  const [userInfo, setUserInfo] = useState([]);
  const [path, setPath] = useState([]);
  const [idResult, setIdResult] = useState('');
  const [isFinish, setIsFinish] = useState(false);
  const [isWrong, setIsWrong] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChangePath = (pattern) => {
    setPath(pattern);
  };

  const closeModal = () => {
    setIsWrong(false);
  };

  const handleFinish = async () => {
    setIsLoading(true);
    let pwString = path.join('');
    setPath([]);
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
        setIsFinish(false);
        setIsWrong(true);
        if (error.response.status == 500) setErrorMessage('서버 is die...');
        else setErrorMessage('일치하지 않습니다!');
      });
    setIsLoading(false);
  };

  const tempSetToken = (token) => {
    return token;
  };

  useEffect(() => {
    const fetchId = async () => {
      const response = await getToken();
      const token = await tempSetToken(response.access_token);

      const result = id ? await getUserId(id, token) : 'error';
      setIdResult(result);
    };
    fetchId();
  }, []);

  return (
    <div className="login-page">
      {isLoading && (
        <Loader type="spin" color="rgb(103, 159, 255)" message="message" />
      )}
      {idResult && (
        <>
          {idResult !== 'error' ? (
            <>
              <h1 className="title">Born to Learn</h1>
              <h2 className="subtitle">반가워요, {id}!</h2>
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
              <div className="unknown">
                존재하지 않는 아이디!
                <br /> 클릭해서 돌아가세요!
              </div>
            </Link>
          )}
        </>
      )}
      {isFinish && (
        <Link
          to={{
            pathname: '/main',
            state: { user_id: userInfo.user_id },
          }}
        >
          <div className="modal">로그인 성공!</div>
        </Link>
      )}
      {isWrong && (
        <div className="modal" role="presentation" onClick={closeModal}>
          {errorMessage}
        </div>
      )}
    </div>
  );
};

export default Login;
