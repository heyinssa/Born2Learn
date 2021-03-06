import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Header, Footer } from 'components';
import MainModal from './MainModal';
import './Main.scss';
import checkId from 'utils/checkId';

import MyPiscineBox from './MyPiscineBox';
import MyEvaluationBox from './MyEvaluationBox';
import ALLPiscineBox from './ALLPiscineBox';

const getUserPiscinesAPI = 'https://betti.kr:9000' + '/api/users';
const getEvaluationAPI = 'https://betti.kr:9000' + '/api/users/';
const getPiscinesAPI = 'https://betti.kr:9000' + '/api/piscines/all';

const Main = ({ location }) => {
  const user_id = checkId(location);
  const [userPiscine, setUserPiscine] = useState([]);
  const [evaluationList, setEvaluationList] = useState([]);
  const [piscineList, setPiscineList] = useState([]);
  const [isAddButtonClicked, setIsAddButtonClicked] = useState(false);

  const getUserPiscine = async (user_id) => {
    const result = await axios
      .get(getUserPiscinesAPI + '/' + user_id + '/piscines')
      .then((response) => {
        setUserPiscine(response.data);
      })
      .catch((error) => {
        console.log(`getUserPiscineAPI 호출 실패! (:${user_id})`);
      });
    return result;
  };

  const getUserEvaluation = async (user_id) => {
    const result = await axios
      .get(getEvaluationAPI + '/' + user_id + '/evaluations')
      .then((response) => {
        setEvaluationList(response.data);
      })
      .catch((error) => {
        console.log(`getUserEvaluation 호출 실패!`);
      });
    return result;
  };

  const getPiscines = async () => {
    try {
      const response = await axios.get(getPiscinesAPI);
      const result = setPiscineList(response.data);
      return result;
    } catch (error) {
      console.log(`getPiscinesAPI 호출 실패!`);
    }
  };

  const closeModal = () => setIsAddButtonClicked(false);
  const openModal = () => setIsAddButtonClicked(true);

  useEffect(() => {
    getUserPiscine(user_id);
    getPiscines(user_id);
    getUserEvaluation(user_id);
  }, []);

  return (
    <div className="main-container">
      <Header user_id={user_id} />
      <div className="main-page ttemp">
        <div className="main-block">
          <MyPiscineBox user_id={user_id} userPiscine={userPiscine} />
          <MyEvaluationBox user_id={user_id} evaluationList={evaluationList} />
          <ALLPiscineBox
            user_id={user_id}
            piscineList={piscineList}
            openModal={openModal}
          />
        </div>
      </div>
      <Footer />
      <MainModal
        isAddButtonClicked={isAddButtonClicked}
        closeModal={closeModal}
      />
    </div>
  );
};

export default Main;
