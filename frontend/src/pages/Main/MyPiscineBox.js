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
                  src="https://cdn-icons.flaticon.com/png/512/2000/premium/2000176.png?token=exp=1636086572~hmac=e6f9274e9e32e1e170319990c1fd492e"
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
