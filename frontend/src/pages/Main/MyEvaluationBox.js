import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const MyEvaluationBox = ({ user_id, evaluationList }) => {
  //   const [eval, setIsFinish] = useState(false);
  const filteredEvaluationList = evaluationList.filter(
    (evaluation) => !evaluation.is_done
  );

  return (
    <div className="main-box">
      <h1>진행중인 평가</h1>
      <div className="evaluation">
        {filteredEvaluationList.map((e, index) => {
          const evalurl = `/myEvaluation/${index}`;
          const sbjurl = `/myPiscine/subject/${e.subject.subject_id}`;
          const evaluator = e.evaluator.id;
          const evaluatee = e.evaluatee.id;
          const subject = e.subject.name;

          return (
            <Link
              key={e.evaluation_id}
              to={{
                pathname: e.evaluatee.user_id === user_id ? sbjurl : evalurl,
                state: { user_id: user_id, subject: e.subject, evaluation: e },
              }}
            >
              <div>
                <b>
                  {evaluator}님이 {evaluatee}님을 평가할 예정입니다.
                </b>
                <span>{subject}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MyEvaluationBox;
