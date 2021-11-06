import React from 'react';
import { Link } from 'react-router-dom';

const MyEvaluationBox = ({ user_id, evaluationList }) => {
  return (
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
  );
};

export default MyEvaluationBox;
