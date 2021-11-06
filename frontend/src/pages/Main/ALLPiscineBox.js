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
                  src="https://cdn-icons.flaticon.com/png/512/2964/premium/2964535.png?token=exp=1636086572~hmac=1a255d30ccfdc9067d57b73d25482553"
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
