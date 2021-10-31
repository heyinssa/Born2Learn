import { React } from 'react';
import Header from 'components/Header';

import './MyPiscineView.scss';

const MyPiscineView = ({ match }) => {
  const index = match.params.index.substring(0, 3);
  return (
    <div className="mypiscine-container">
      <Header />
      <div className="body">
        <h1>각 과제에 대한 페이지</h1>
        {index}에 대한 정보를 불러올 것.
      </div>
    </div>
  );
};

export default MyPiscineView;
