import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const MyEvaluationBox = ({ user_id, evaluationList }) => {
  //   const [eval, setIsFinish] = useState(false);

  return (
    <div className="main-box">
      <h1>진행중인 평가</h1>
      <div className="evaluation">
        {evaluationList.map((e, index) => {
          const url = `/myEvaluation/${index}`;
          const evaluator = e.evaluator.id;
          const evaluatee = e.evaluatee.id;
          const subject = e.subject.name;
          return (
            // 여기서 분기가 들어가야함
            <Link
              to={{
                pathname: url,
                state: { user_id: user_id },
              }}
            >
              <div>
                <b>
                  {console.log(e)}
                  {evaluator}님이 {evaluatee}님의 {subject}를 평가할 예정입니다.
                  {/* 예정입니다 */}
                </b>
                <span>with ycha</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MyEvaluationBox;
