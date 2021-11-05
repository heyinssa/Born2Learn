import axios from 'axios';
import React, { useState } from 'react';

const url = 'http://betti.kr:9000';

const PostRepository = ({ closeModal }) => {
  const [repositoryURL, setRepositoryURL] = useState('');
  const [postRepo, setPostRepo] = useState(false);

  const handleChange = ({ target: { value } }) => setRepositoryURL(value);
  const handleSubmit = async (event) => {
    // setPostRepo(true);
    event.preventDefault();
    await axios
      .post(url)
      .then((response) => {})
      .catch((error) => {});
    setPostRepo(false);
  };
  return (
    <>
      <form className="form-box" onSubmit={handleSubmit}>
        <input
          type="text"
          name="repositoryurl"
          value={repositoryURL}
          onChange={handleChange}
        />
        <button type="submit" disabled={postRepo} onClick={closeModal}>
          완료
        </button>
      </form>
    </>
  );
};

const MainModal = ({ isAddButtonClicked, closeModal }) => {
  return (
    <>
      {isAddButtonClicked && (
        <div className="modal" role="presentation">
          <div className="modal-box">
            <h1>과정 등록하기</h1>
            <PostRepository closeModal={closeModal} />
          </div>
        </div>
      )}
    </>
  );
};

export default MainModal;
