import { React, useState, useEffect } from 'react';
import './Body.scss';

const UserProfile = () => {
  const [userImage, setUserImage] = useState([]);
  useEffect(() => {
    setUserImage(['aaa', 'bb', 'cc']);
  }, []);

  return (
    <div className="comp-temp">
      <span>USERS</span>
      <div className="user-image">
        {userImage.map((e, index) => {
          return <div>{e}</div>;
        })}
      </div>
    </div>
  );
};

export default UserProfile;
