import React from 'react';
import { Header, Footer } from 'components';

const MyEvaluation = ({ match, location }) => {
  const id = location.state.id;
  return (
    <div className="myevaluation-container">
      <Header />
      <div className="myevaluationbox ttemp">
        <button>finish</button>
      </div>
      <Footer />
    </div>
  );
};

export default MyEvaluation;
