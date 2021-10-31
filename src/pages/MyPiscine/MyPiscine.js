import { React } from 'react';
import Header from 'components/Header';
import { Link } from 'react-router-dom';

import './MyPiscine.scss';

const MyPiscine = ({ match }) => {
  const index = match.params.index.substring(0);
  const dummy = ['11', '22', '33'];
  return (
    <div className="mypiscine-container">
      <Header />
      <div className="body">
        <h1>Git Branch Piscine</h1>
        <h2>sdfaksfljdsalkfjdas sdfjlaksdfjasldfj sdfjksda!</h2>
        {index}번째 피신을 선택 현재 피신에 대한 정보를 API든 뭐든 요청.
        {dummy.map((e, i) => {
          const url = `/myPiscine/view/${index}-${i}`;
          return (
            <Link to={url} className="dummy">
              <div>{e}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MyPiscine;
