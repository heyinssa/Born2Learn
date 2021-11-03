import { React } from 'react';
import { Link } from 'react-router-dom';
import sq from 'asset/sq.png';
import './Header.scss';

const Header = () => {
  return (
    <div className="header">
      <Link to="/main">
        <div>WMPB</div>
      </Link>
      <img
        class="fit-picture"
        src={sq}
        alt="Grapefruit slice atop a pile of other slices"
      />
    </div>
  );
};

export default Header;
