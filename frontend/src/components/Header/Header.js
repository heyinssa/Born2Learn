import { React } from 'react';
import { Link } from 'react-router-dom';
import Headroom from 'react-headroom';

import './Header.scss';

const Header = ({ path, user_id }) => {
  return (
    <Headroom
      onPin={() => console.log('pinned')}
      onUnpin={() => console.log('unpinned')}
    >
      {path !== '/' && (
        <div className="header">
          <div className="header-box">
            <Link
              to={{
                pathname: '/main',
                state: { user_id: user_id },
              }}
            >
              <div className="header-box-flex">
                {/* <div className="profile-button hidden">d</div> */}
                <div>Born to Learn</div>
                {/* <div className="profile-button hidden">d</div> */}
              </div>
            </Link>
          </div>
        </div>
      )}
    </Headroom>
    // </div>
  );
};

export default Header;
