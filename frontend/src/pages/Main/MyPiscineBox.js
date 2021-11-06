import React from 'react';
import { Link } from 'react-router-dom';

const MyPiscineBox = ({ user_id, userPiscine }) => {
  return (
    <div className="main-box">
      <h1>참여 중인 과정</h1>
      <div className="parti">
        {userPiscine.map((e, index) => {
          const url = `/myPiscine/${index}`;
          return (
            <Link
              to={{
                pathname: url,
                state: { user_id: user_id, piscine: e },
              }}
            >
              <div className="parti-box">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/42_Logo.svg/1024px-42_Logo.svg.png"
                  alt="img"
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

export default MyPiscineBox;
