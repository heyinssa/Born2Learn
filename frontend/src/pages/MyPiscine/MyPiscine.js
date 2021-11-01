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
        <div className="mypiscinebox">
          <h1>Git Branch Piscine</h1>
          <h2>sdfaksfljdsalkfjdas sdfjlaksdfjasldfj sdfjksda!</h2>
          {dummy.map((e, i) => {
            const url = `/myPiscine/view/${index}-${i}`;
            return (
              <Link to={url}>
                <div className="dummy">{e}</div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MyPiscine;
