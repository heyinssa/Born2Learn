import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PatternLock from "react-pattern-lock";
import getToken from "utils/getToken";
import getUserId from "utils/getUserId";

import "./Register.scss";
//import axios from "axios";

//const checkValidatePasswordApi = "http://betti.kr:9000/api/users";

const Login = ({ location }) => {
  const id = location.state.userId;
  // const [userInfo, setUserInfo] = useState([]);
  const [path, setPath] = useState([]);
  const [comparePath, setComparePath] = useState("");
  const [idResult, setIdResult] = useState("");
  const [isFinish, setIsFinish] = useState(false);
  const [isWrong, setIsWrong] = useState(false);

  const handleChangePath = (pattern) => {
    setPath(pattern);
  };

  const handleFinish = async () => {
    const pwString = path.join("");
    setPath([]);
    if (comparePath) {
      console.log("비교해야 합니다.");
      if (pwString === comparePath) {
        setIsFinish(true);
      } else {
        setIsWrong(true);
      }
    } else {
      console.log(pwString);
      console.log("한번더 입력.");
      setComparePath(pwString);
    }
  };

  const closeModal = () => {
    setIsWrong(false);
    setComparePath("");
  };

  const tempSetToken = (token) => {
    return token;
  };

  useEffect(() => {
    const fetchId = async () => {
      const response = await getToken();
      const token = await tempSetToken(response.access_token);

      const result = id ? await getUserId(id, token) : "error";
      setIdResult(result);
    };
    fetchId();
  }, []);

  return (
    <div className="login-page">
      {idResult && (
        <>
          {idResult !== "error" ? (
            <>
              <h1 className="title">WMPB</h1>
              {comparePath ? (
                <h2>한 번 더 입력해주세요.</h2>
              ) : (
                <h2>어서와요, {id}!</h2>
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
            pathname: "/main",
            state: { userInfo: "userInfo" },
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
    </div>
  );
};

export default Login;
