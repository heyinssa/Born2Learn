import { React, useState, useEffect } from 'react';
import axios from 'axios';

import MySubjectTitleEvaluationLog from './MySubjectTitleEvaluationLog';
const getUserEvaluationListAPI = 'http://betti.kr:9000' + '/api/users';

const MySubjectTitleEvaluation = () => {
  const [isFinish, setIsFinish] = useState(false);
  const [userEvaluationList, setUserEvaluationList] = useState([]);

  const fetchEvaluationList = async () => {
    axios
      .get(getUserEvaluationListAPI)
      .then((response) => {
        setUserEvaluationList(response.data);
      })
      .catch((error) => {
        console.log(`getUserEvaluationListAPI호출 에러!! ${error}`);
      });
  };

  const fetchIsFinish = async () => {
    axios
      .get(getUserEvaluationListAPI)
      .then((response) => {
        setUserEvaluationList(response.data);
      })
      .catch((error) => {
        console.log(`getUserEvaluationListAPI호출 에러!! ${error}`);
      });
  };

  useEffect(() => {
    fetchIsFinish();
    fetchEvaluationList();
  });

  return (
    <div className="mysubject-box-evaluationbox">
      {isFinish && <MySubjectTitleEvaluationLog />}
      {!isFinish && (
        <div className="finishbutton">
          <div>
            <button />
          </div>
        </div>
      )}
    </div>
  );
};

export default MySubjectTitleEvaluation;
