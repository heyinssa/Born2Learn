import React from 'react';
import { Link } from 'react-router-dom';

const MyPiscineContents = ({ user_id, userPiscineSubjectList, index }) => {
  return (
    <div className="mypiscine-box">
      <div className="mypiscine-box-column">
        {userPiscineSubjectList.map((e, idx) => {
          console.log(e);
          const url = `/myPiscine/view/${index}-${idx}`;
          return (
            <Link
              to={{
                pathname: url,
                state: { user_id: user_id, subject: e },
              }}
            >
              <div>
                <h1>{e.name}</h1>
                <h2>asdf</h2>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MyPiscineContents;
