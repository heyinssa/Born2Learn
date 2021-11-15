import React from 'react';

const MySubjectTitleEvaluationLog = ({ subjectEvaluationList }) => {
  return (
    <>
      <h2>EVALUATION LOG</h2>
      {subjectEvaluationList.map((e) => {
        return (
          <div className="evaluation-box">
            <div className="evaluation-box-title">
              <span> {e.evaluator.id} </span>
              <span> {e.score} % </span>
            </div>
            <div className="evaluation-box-feedback">
              <div> {e.evaluator_feedback} </div>
              {/* <div> 여긴 {e.evaluator_feedback} </div> */}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default MySubjectTitleEvaluationLog;
