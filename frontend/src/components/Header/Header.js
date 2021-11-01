import { React } from 'react';
import './Header.scss';

const Header = () => {
  return (
    <div className="header">
      <div>WMPB</div>
      <img
        class="fit-picture"
        src="asset/sq.png"
        alt="Grapefruit slice atop a pile of other slices"
      />
    </div>
  );
};

export default Header;
