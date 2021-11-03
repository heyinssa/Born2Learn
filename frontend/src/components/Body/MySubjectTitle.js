import { React, useState, useEffect } from 'react';
import axios from 'axios';

const getUserSubjectAPI =
  'http://ec2-3-34-2-242.ap-northeast-2.compute.amazonaws.com:9001/api/users';

const MySubjectTitle = () => {
  const [myPiscine, setMyPiscine] = useState([]);
  const [userState, setUserState] = useState('done');

  useEffect(() => {
    const asyncProcess = async () => {
      axios
        .get(getUserSubjectAPI)
        .then((response) => {
          setUserState(response.data.state);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    asyncProcess();
  });

  return (
    <div className="comp-temp">
      <h3>Piscine Name</h3>
      <div className="comp-box1">
        {userState === 'done' && (
          <img class="state" src="../../logo192.png" alt="done" />
        )}
        <div className="subject">
          <h1>subject name</h1>
          <h3>subject info</h3>
        </div>
        <div className="percent">100%</div>
      </div>
    </div>
  );
};

export default MySubjectTitle;
