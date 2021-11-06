import { React } from 'react';
import { Link } from 'react-router-dom';
import Headroom from 'react-headroom';

import './Header.scss';

const Header = ({ path, user_id }) => {
  console.log(path);
  console.log(user_id);
  return (
    // <div style={{ marginBottom: rhythm(1) }}>
    <Headroom
      onPin={() => console.log('pinned')}
      onUnpin={() => console.log('unpinned')}
      // wrapperStyle={{ marginBottom: rhythm(1) }}
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
              <div>WMPB</div>
            </Link>
          </div>
        </div>
      )}
    </Headroom>
    // </div>
  );
};

export default Header;
