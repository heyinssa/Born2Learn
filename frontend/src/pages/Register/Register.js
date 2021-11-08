import { React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PatternLock from 'react-pattern-lock';
import getToken from 'utils/getToken';
import getUserId from 'utils/getUserId';
import './Register.scss';
import axios from 'axios';

const checkValidatePasswordApi = 'https://betti.kr:9000' + '/api/users';

const Register = ({ location }) => {
  const id = location.state.userId;
  // const [userInfo, setUserInfo] = useState([]);
  let userInfo;
  const [isValid, setIsValid] = useState(false);
  const [path, setPath] = useState([]);
  const [comparePath, setComparePath] = useState('');
  const [idResult, setIdResult] = useState('');
  const [isFinish, setIsFinish] = useState(false);
  const [isWrong, setIsWrong] = useState(false);

  const postRegiser = async (id, pwString) => {
    const result = await axios
      .post(checkValidatePasswordApi + '/register', {
        data: {
          id: id,
          password: pwString,
        },
      })
      .then((response) => {
          userInfo = response.data;
          // console.log(userInfo);
          setIsFinish(true);
        console.log(response.data);
      })
      .catch((error) => {
        if (!error || !error.response || error.response.status == 404) {
          setIsValid(true);
        }
      });
  };

  const handleChangePath = (pattern) => {
    setPath(pattern);
  };

  const handleFinish = async () => {
    const pwString = path.join('');
    setPath([]);
    if (comparePath) {
      console.log('비교해야 합니다.');
      if (pwString === comparePath) {
        const result = await postRegiser(id, pwString);
        if (result) {
          userInfo = result.data;
          // console.log(userInfo);
          setIsFinish(true);
        } else {
          // alert(result);
        }
      } else {
        setIsWrong(true);
      }
    } else {
      console.log(pwString);
      console.log('한번더 입력.');
      setComparePath(pwString);
    }
  };

  const closeModal = () => {
    setIsWrong(false);
    setComparePath('');
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
      {idResult && (
        <>
          {idResult !== 'error' ? (
            <>
              <h1 className="title">Born to Learn</h1>
              {comparePath ? (
                <h2 className="subtitle">한 번 더 입력해주세요.</h2>
              ) : (
                <h2 className="subtitle">어서와요, {id}!</h2>
              )}
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
          <div className="modal">회원가입 성공!</div>
        </Link>
      )}
      {isWrong && (
        <div className="modal" role="presentation" onClick={closeModal}>
          일치하지 않습니다!
        </div>
      )}
      {isValid && (
        <Link to={'/'}>
          <div className="modal">
            이미 존재하는 아이디입니다! 비밀번호를 잊으셨다면 개발자에게
            연락하세요 :)
          </div>
        </Link>
      )}
    </div>
  );
};

export default Register;
