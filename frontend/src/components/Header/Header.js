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
          <Link
            to={{
              pathname: '/main',
              state: { userId: process.env.USER_ID },
            }}
          >
            <div>WMPB</div>
          </Link>
          <img
            className="fit-picture"
            src={sq}
            alt="Grapefruit slice atop a pile of other slices"
          />
        </div>
      )}
    </>
  );
};

export default Header;
