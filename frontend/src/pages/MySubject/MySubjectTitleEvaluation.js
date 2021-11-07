import { React, useState, useEffect } from 'react';
import axios from 'axios';

import MySubjectTitleEvaluationLog from './MySubjectTitleEvaluationLog';
const getUserEvaluationListAPI = 'http://betti.kr:9000' + '/api/users';
const getEvaluationAPI = 'http://betti.kr:9000' + '/api/users';

const MySubjectTitleEvaluation = ({ user_id, subject, isFinished }) => {
  // const [userEvaluationList, setUserEvaluationList] = useState([]);
  const [evaluationList, setEvaluationList] = useState([]);
  const [subjectEvaluationList, setSubjectEvaluationList] = useState([]);

  const fetchEvaluationList = async () => {
    const result = await axios
      .get(getEvaluationAPI + '/' + user_id + '/evaluations')
      .then((response) => {
        setEvaluationList(response.data);
        setSubjectEvaluationList(
          response.data.filter((result) => {
            return (
              result.subject.subject_id == subject.subject_id &&
              result.evaluator.user_id != user_id
            );
          })
        );
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

  const handleFisish = () => {
    axios
      .put(
        getEvaluationAPI +
          '/' +
          user_id +
          '/subjects/' +
          subject.subject_id +
          '/finish'
      )
      .then((response) => {
        // /isFinished = true;
      })
      .catch((error) => {
        console.log('set finish 호출 실패!');
      });
  };

  useEffect(() => {
    console.log(isFinished);
    fetchEvaluationList();
  }, []);

  return (
    <div className="mysubject-box-evaluation">
      {isFinished == 1 && (
        <MySubjectTitleEvaluationLog
          subjectEvaluationList={subjectEvaluationList}
        />
      )}
      {isFinished == 0 && (
        <div className="finishbutton">
          <button onClick={handleFisish}> Set Finish </button>
        </div>
      )}
    </div>
  );
};

export default MySubjectTitleEvaluation;
