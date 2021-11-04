import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Main.scss';
import { Header, Footer } from 'components';

const getUserPiscinesAPI = 'http://betti.kr:9000' + '/api/users';
const getEvaluationAPI = 'http://betti.kr:9000' + '/api/users/';
const getPiscinesAPI = 'http://betti.kr:9000' + '/api/piscines';

const usertempid = '026bcd81-2899-40c4-be3d-c661b4cffbd9';
const Main = ({ location }) => {
  const id = location.state.userInfo.user_id;

  const [userPiscine, setUserPiscine] = useState([]);
  const [evaluationList, setEvaluationList] = useState(['aa', 'bb', 'cc']);
  const [piscineList, setPiscineList] = useState([]);
  const [isAddButtonClicked, setIsAddButtonClicked] = useState(false);

  const getUserPiscine = (id) => {
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

  const getUserEvaluation = (id) => {
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
  };

  useEffect(() => {
    getUserPiscine(id);
    // setEvaluationList(['aa', 'bb', 'cc']);
    getPiscines(id);
  }, []);

  return (
    <div className="main-container">
      <Header />
      <div className="main-page ttemp">
        <div className="main-block">
          <h1>참여 중인 과정</h1>
          <div className="parti">
            {userPiscine.map((e, index) => {
              const url = `/myPiscine/${index}`;
              return (
                <Link
                  to={{
                    pathname: url,
                    state: { id: id, piscine: e },
                  }}
                >
                  <div>{e.name}</div>
                </Link>
              );
            })}
          </div>
          {/* 컴포넌트 경계 */}
          <h1>진행중인 평가</h1>
          <div className="evaluation">
            {evaluationList.map((e, index) => {
              const url = `/myEvaluation/${index}`;
              return (
                <Link
                  to={{
                    pathname: url,
                    state: { id: id },
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
          {/* 컴포넌트 경계 */}
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
                    state: { id: id },
                  }}
                >
                  <div>{e.name}</div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      {/* 컴포넌트 경계 */}
      <Footer />
      {isAddButtonClicked && (
        <div className="modal" role="presentation" onClick={() => closeModal}>
          <div className="modal-box">
            <div>hi</div>
            <input></input>
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;
