import React from 'react';
import { Link } from 'react-router-dom';

const ALLPiscineBox = ({ user_id, piscineList, openModal }) => {
  return (
    <div className="main-box">
      <div className="not-parti-title">
        <h1>전체 과정</h1>
        <button onClick={openModal}>+</button>
      </div>
      <div className="not-parti">
        {piscineList.map((e, index) => {
          const url = `/registerPiscine/${index}`;
          return (
            <Link
              key={e.piscine_id}
              to={{
                pathname: url,
                state: { user_id: user_id, piscine: e },
              }}
            >
              <div className="parti-box">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/42_Logo.svg/1024px-42_Logo.svg.png"
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
