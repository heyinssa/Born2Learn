import { React, useState, useEffect } from 'react';
import { Header, Footer } from 'components';
import axios, { Axios } from 'axios';
import './MyEvaluation.scss';

import checkId from 'utils/checkId';
// import MyEvaluationContents from './MyEvaluationContents';

const MyEvaluation = ({ match, location }) => {
  const [feedback, setFeedback] = useState('');
  const [score, setScore] = useState('');
  const user_id = checkId(location);
  const subject = location.state.subject;

  const handleFeedback = (event) => {
    console.log(event);
    setFeedback(event.target.value);
  };

  const handleScore = (event) => {
    setScore(event.target.value);
  };

  const checkEmpty = () => {
    if (!score || !feedback) return false;
  };

  const feedbackFinish = () => {
    axios
      .post()
      .then((response) => {})
      .catch((error) => {});
  };

  return (
    <div className="myevaluation-container">
      <Header user_id={user_id} />
      <div className="myevaluation-page ttemp">
        <div className="myevaluation-block">
          <div className="myevaluation-box">
            <div className="myevaluation-box-title">
              <h1>{subject.name}</h1>
            </div>
            <form className="myevaluation-box-form">
              <div className="myevaluation-box-form-box">
                <h2>FEEDBACK LOG</h2>
                <textarea
                  className="feedback"
                  type="text"
                  name="feedback"
                  value={feedback}
                  onChange={handleFeedback}
                />
              </div>
              <div className="myevaluation-box-form-box">
                <h2>FEEDBACK LOG</h2>
                <textarea
                  type="text"
                  name="score"
                  value={score}
                  onChange={handleScore}
                />
              </div>
              <button
                type="submit"
                disabled={checkEmpty}
                onClick={feedbackFinish}
              >
                완료
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyEvaluation;
