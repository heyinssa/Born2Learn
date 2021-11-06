import React from 'react';
import ReactLoading from 'react-loading';

const Loader = ({ type, color, message }) => {
  return (
    <div
      class="contentWrap"
      style={{ background: 'rgba(0,0,0,0.6)', zIndex: 4 }}
    >
      {' '}
      <div
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <ReactLoading
          type={type}
          color={color}
          height={'15vw'}
          width={'15vw'}
        />
      </div>
    </div>
  );
};

export default Loader;
