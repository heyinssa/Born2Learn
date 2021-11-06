import { React } from 'react';
import { Link } from 'react-router-dom';
import sq from 'asset/sq.png';
import './Header.scss';

const Header = ({ path, user_id }) => {
  console.log(path);
  console.log(user_id);
  return (
    <>
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
    </>
  );
};

export default Header;
