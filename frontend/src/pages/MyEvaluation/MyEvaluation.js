import { React, useState, useEffect } from 'react';
import { Header, Footer } from 'components';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Slider } from '@mui/material';
import './MyEvaluation.scss';

import checkId from 'utils/checkId';
// import MyEvaluationContents from './MyEvaluationContents';

const putUserFeedbackAPI = 'https://betti.kr:9000' + '/api/evaluations';

const MyEvaluation = ({ match, location }) => {
  const [feedback, setFeedback] = useState('');
  const [score, setScore] = useState('');

  const user_id = checkId(location);
  const evaluation = location.state.evaluation;
  const subject = location.state.subject;

  let valuetext;

  const handleFeedback = (event) => {
    // console.log(event);
    // console.log(valuetext);
    setFeedback(event.target.value);
    console.log(feedback);
  };

  const handleScore = (event) => {
    setScore(event.target.value);
  };
  const checkEmpty = () => {
    if (!feedback) return false;
  };

  const feedbackFinish = async () => {
    // score , feedback 보내기
    await axios
      .put(putUserFeedbackAPI + '/' + evaluation.evaluation_id, {
        data: {
          evaluator_id: evaluation.evaluator_id,
          evaluatee_id: evaluation.evaluatee_id,
          subject_id: subject.subject_id,
          is_done: 1,
          evaluator_feedback: feedback,
          evaluatee_feedback: 'none',
          score: score,
        },
      })
      .then((response) => {
        console.log('put evaluation api 성공!');
      })
      .catch((error) => {
        console.log('put evaluation api 성공!');
      });
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
                <h2>Score</h2>
                <Slider
                  aria-label="Temperature"
                  defaultValue={30}
                  onChange={handleScore}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={10}
                  marks
                  min={0}
                  max={100}
                />
              </div>
              <Link
                to={{
                  pathname: '/main',
                  state: { user_id: user_id },
                }}
              >
                <button
                  className="finishbutton"
                  type="submit"
                  disabled={checkEmpty}
                  onClick={feedbackFinish}
                >
                  완료
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyEvaluation;
