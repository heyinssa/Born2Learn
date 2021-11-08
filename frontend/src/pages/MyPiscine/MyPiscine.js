import { React, useState, useEffect } from 'react';
import { Header, Footer } from 'components';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './MyPiscine.scss';

import MyPiscineTitle from './MyPiscineTitle';
import MyPiscineContents from './MyPiscineContents';
import checkId from 'utils/checkId';

const getPiscineSubjectAPI = 'https://betti.kr:9000' + '/api/piscines';

const MyPiscine = ({ match, location }) => {
  const user_id = checkId(location);
  let piscine;
  if (user_id) piscine = location.state.piscine;

  const [userPiscineSubjectList, setUserPiscineSubjectList] = useState([]);
  const index = match.params.index.substring(0);

  const getUserPiscine = (id) => {
    axios
      .get(getPiscineSubjectAPI + '/' + piscine.piscine_id + '/subjects')
      .then((response) => {
        setUserPiscineSubjectList(response.data);
      })
      .catch((error) => {
        console.log(
          `getPiscineSubjectAPI 호출 실패! id: ${piscine.piscine_id}`
        );
      });
  };

  useEffect(() => {
    if (user_id) getUserPiscine(user_id);
  }, []);

  return (
    <div className="mypiscine-container">
      <Header user_id={user_id} />
      <div className="mypiscine-page ttemp">
        <div className="mypiscine-block">
          <MyPiscineTitle piscine={piscine} />
          <MyPiscineContents
            user_id={user_id}
            userPiscineSubjectList={userPiscineSubjectList}
            index={index}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyPiscine;
