import React from 'react';
import { Header, Footer } from 'components';
import checkId from 'utils/checkId';

const MyEvaluation = ({ match, location }) => {
  const user_id = checkId(location);

  return (
    <div className="myevaluation-container">
      <Header user_id={user_id} />
      <div className="myevaluationbox ttemp">
        <button>finish</button>
      </div>
      <Footer />
    </div>
  );
};

export default MyEvaluation;
