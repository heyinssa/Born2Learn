import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Header, Footer } from 'components';
import MainModal from './MainModal';
import './Main.scss';
import checkId from 'utils/checkId';

const getUserPiscinesAPI = 'http://betti.kr:9000' + '/api/users';
const getEvaluationAPI = 'http://betti.kr:9000' + '/api/users/';
const getPiscinesAPI = 'http://betti.kr:9000' + '/api/piscines';

const usertempid = '026bcd81-2899-40c4-be3d-c661b4cffbd9';
const Main = ({ location }) => {
  const user_id = checkId(location);
  console.log(user_id);
  const [userPiscine, setUserPiscine] = useState([]);
  const [evaluationList, setEvaluationList] = useState(['aa', 'bb', 'cc']);
  const [piscineList, setPiscineList] = useState([]);
  const [isAddButtonClicked, setIsAddButtonClicked] = useState(false);

  const getUserPiscine = (user_id) => {
    /** usertempid 를 id로 바꿔야함 **/
    const result = axios
      .get(getUserPiscinesAPI + '/' + usertempid + '/piscines')
      .then((response) => {
        setUserPiscine(response.data);
      })
      .catch((error) => {
        console.log(`getUserPiscineAPI 호출 실패! (:${usertempid})`);
      });
    return result;
  };

  const getUserEvaluation = (user_id) => {
    /** usertempid 를 id로 바꿔야함 **/
    const result = axios
      .get(getEvaluationAPI + '/' + usertempid + '/evaluation')
      .then((response) => {
        setEvaluationList(response.data);
      })
      .catch((error) => {
        console.log(`getUserEvaluation 호출 실패!`);
      });
    return result;
  };

  const getPiscines = () => {
    const result = axios
      .get(getPiscinesAPI)
      .then((response) => {
        setPiscineList(response.data);
      })
      .catch((error) => {
        console.log(`getPiscinesAPI 호출 실패!`);
      });
    return result;
  };

  const closeModal = () => {
    setIsAddButtonClicked(false);
  };
  const openModal = () => {
    setIsAddButtonClicked(true);

    console.log(isAddButtonClicked);
  };

  useEffect(() => {
    getUserPiscine(user_id);
    getPiscines(user_id);
  }, []);

  return (
    <div className="main-container">
      <Header />
      <div className="main-page ttemp">
        <div className="main-block">
          <div className="main-box">
            <h1>참여 중인 과정</h1>
            <div className="parti">
              {userPiscine.map((e, index) => {
                const url = `/myPiscine/${index}`;
                return (
                  <Link
                    to={{
                      pathname: url,
                      state: { user_id: user_id, piscine: e },
                    }}
                  >
                    <div className="parti-box">
                      <img
                        src={require('https://cdn-icons.flaticon.com/png/512/2000/premium/2000176.png?token=exp=1636086572~hmac=e6f9274e9e32e1e170319990c1fd492e')}
                        alt="img"
                      />
                      <div>{e.name}</div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
          {/* 컴포넌트 경계 */}
          <div className="main-box">
            <h1>진행중인 평가</h1>
            <div className="evaluation">
              {evaluationList.map((e, index) => {
                const url = `/myEvaluation/${index}`;
                return (
                  <Link
                    to={{
                      pathname: url,
                      state: { user_id: user_id },
                    }}
                  >
                    <div>
                      <b>ABCD Piscine must be evaluated</b>
                      <span>with ycha</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
          {/* 컴포넌트 경계 */}
          <div className="main-box">
            <div className="not-parti-title">
              <h1>등록 가능한 과정</h1>
              <button onClick={openModal}>+</button>
            </div>
            <div className="not-parti">
              {piscineList.map((e, index) => {
                const url = `/registerPiscine/${index}`;
                return (
                  <Link
                    to={{
                      pathname: url,
                      state: { user_id: user_id },
                    }}
                  >
                    <div className="parti-box">
                      <img
                        src={require('https://cdn-icons.flaticon.com/png/512/2964/premium/2964535.png?token=exp=1636086572~hmac=1a255d30ccfdc9067d57b73d25482553')}
                        alt="box"
                      />
                      <div>{e.name}</div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* 컴포넌트 경계 */}
      <Footer />
      <MainModal
        isAddButtonClicked={isAddButtonClicked}
        closeModal={closeModal}
      />
    </div>
  );
};

export default Main;
