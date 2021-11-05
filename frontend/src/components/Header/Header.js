import { React } from 'react';
import { Link } from 'react-router-dom';
import sq from 'asset/sq.png';
import './Header.scss';

const Header = ({ path }) => {
  console.log(path);
  return (
    <>
      {path !== '/' && (
        <div className="header">
          <div className="header-box">
            <Link
              to={{
                pathname: '/main',
                state: { userId: process.env.USER_ID },
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
