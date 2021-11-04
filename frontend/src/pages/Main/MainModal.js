import React from 'react';

const MainModal = ({ isAddButtonClicked, closeModal }) => {
  return (
    <>
      {isAddButtonClicked && (
        <div className="modal" role="presentation" onClick={closeModal}>
          <div className="modal-box">
            <h1>Input Your Git Repository</h1>
            <input></input>
            <button>완료</button>
          </div>
        </div>
      )}
    </>
  );
};

export default MainModal;
