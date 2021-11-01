import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Header from 'components/Header';
import './Main.scss';

const Main = () => {
  const [myPiscine, setMyPiscine] = useState([]);
  const [piscineList, setPiscineList] = useState([]);
  useEffect(() => {
    setMyPiscine(['aaa', 'bb', 'cc']);
    setPiscineList(['qwe', 'zcxv', 'asdg', 'sa', 'saf', 'asffqw']);
  }, []);

  return (
    <div className="main-container">
      <Header />
      <div className="main-page">
        <div className="main-block">
        <h1>참여 중인 과정</h1>

        <div className="parti">
          {myPiscine.map((e, index) => {
            const url = `/myPiscine/${index}`;
            return (
              <Link to={url}>
                <div>{e}</div>
              </Link>
            );
          })}
        </div>
        <h1>등록 가능한 과정</h1>

        <div className="not-parti">
          {piscineList.map((e, index) => {
            const url = `/registerPiscine/${index}`;
            return (
              <Link to={url}>
                <div>{e}</div>
              </Link>
            );
          })}
        </div>
      </div>
      </div>
    </div>
  );
};

export default Main;
