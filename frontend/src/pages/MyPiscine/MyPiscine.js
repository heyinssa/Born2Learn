import { React } from 'react';
import { Header, Footer } from 'components';
import { Link } from 'react-router-dom';

import './MyPiscine.scss';

const MyPiscine = ({ match }) => {
  const index = match.params.index.substring(0);
  const dummy = ['11', '22', '33'];
  return (
    <div className="mypiscine-container">
      <Header />
      {/* <div className="mypiscine-page"> */}
      <div className="mypiscinebox ttemp">
        <span className="title">Git Branch Piscine</span>
        <span className="subtitle">Git Branch에 대해 배워봅시다!</span>
        <div className="dummy">
          {dummy.map((e, i) => {
            const url = `/myPiscine/view/${index}-${i}`;
            return (
              <Link to={url}>
                <div>{e}</div>
              </Link>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyPiscine;
