import React from 'react';
import { Link } from 'react-router-dom';

const ALLPiscineBox = ({ user_id, piscineList, openModal }) => {
  return (
    <div className="main-box">
      <div className="not-parti-title">
        <h1>등록 가능한 과정</h1>
        <button onClick={openModal}>+</button>
      </div>
      <div className="not-parti">
        {piscineList.map((e, index) => {
          const url = `/registerPiscine/${index}`;
          return (
            <Link
              to={{
                pathname: url,
                state: { user_id: user_id },
              }}
            >
              <div className="parti-box">
                <img
                  src="https://42seoul.kr/template/cms/seoul42/images/common/head_logo.png"
                  alt="box"
                />
                <div>{e.name}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ALLPiscineBox;
