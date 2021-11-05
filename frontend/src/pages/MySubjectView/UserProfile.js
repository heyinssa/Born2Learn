import { React, useState, useEffect } from 'react';

const UserProfile = () => {
  const [userImage, setUserImage] = useState([]);
  useEffect(() => {
    setUserImage(['aaa', 'bb', 'cc']);
  }, []);

  return (
    <div className="comp-temp">
      <div className="user_profile">
        <h2>USERS</h2>
        <div className="user-image">
          {userImage.map((e, index) => {
            return <div className="userbox">{e}</div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
