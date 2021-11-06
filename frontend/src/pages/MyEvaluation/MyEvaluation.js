import React from 'react';
import { Header, Footer } from 'components';

import checkId from 'utils/checkId';
import MyEvaluationContents from './MyEvaluationContents';

const MyEvaluation = ({ match, location }) => {
  const user_id = checkId(location);

  return (
    <div className="myevaluation-container">
      <Header user_id={user_id} />
      <div className="myevaluation-page ttemp">
        <div className="myevaluation-block">
          <MyEvaluationContents />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyEvaluation;
