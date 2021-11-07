import { React, useState, useEffect } from 'react';
import axios from 'axios';

import MySubjectTitleEvaluationLog from './MySubjectTitleEvaluationLog';
const getUserEvaluationListAPI = 'http://betti.kr:9000' + '/api/users';
const getEvaluationAPI = 'http://betti.kr:9000' + '/api/users';

const MySubjectTitleEvaluation = ({ user_id, subject }) => {
  const [isFinish, setIsFinish] = useState(false);
  // const [userEvaluationList, setUserEvaluationList] = useState([]);
  const [evaluationList, setEvaluationList] = useState([]);
  const [subjectEvaluationList, setSubjectEvaluationList] = useState([]);

  const fetchEvaluationList = async () => {
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
  // 끝났는지 안끝났는지 결과 가져와야함
  const fetchUserSubject = async () => {
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

  useEffect(() => {
    console.log(subject);
    setIsFinish(subject.is_done);
    fetchEvaluationList();
    fetchUserSubject();
    setSubjectEvaluationList(
      evaluationList.filter((result) => {
        return result.subject.subject_id !== subject.subject_id;
      })
    );
  }, []);

  return (
    <div className="mysubject-box-evaluation">
      {isFinish && (
        <MySubjectTitleEvaluationLog
          subjectEvaluationList={subjectEvaluationList}
        />
      )}
      {!isFinish && (
        <div className="finishbutton">
          <button> Set Finish </button>
        </div>
      )}
    </div>
  );
};

export default MySubjectTitleEvaluation;
