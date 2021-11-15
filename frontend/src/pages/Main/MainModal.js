import axios from 'axios';
import React, { useState } from 'react';

const url = 'https://betti.kr:9000';

const PostRepository = ({ closeModal }) => {
  const [repositoryURL, setRepositoryURL] = useState('');
  const [postRepo, setPostRepo] = useState(false);

  const handleChange = ({ target: { value } }) => setRepositoryURL(value);
  const handleSubmit = async (event) => {
    closeModal();
    event.preventDefault();
    await axios
      .post(url + '/api/piscines/ps', {
        data: {
          github_link: repositoryURL,
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log('API 호출 실패!');
      });
    setPostRepo(false);
  };
  return (
    <>
      <form className="form-box">
        <input
          type="text"
          name="repositoryurl"
          value={repositoryURL}
          onChange={handleChange}
        />
        <button type="submit" disabled={postRepo} onClick={handleSubmit}>
          완료
        </button>
      </form>
    </>
  );
};

const MainModal = ({ isAddButtonClicked, closeModal }) => {
  return (
    <>
      <div
        className={['modal', !isAddButtonClicked && 'modal-open'].join(' ')}
        role="presentation"
      >
        <div className="modal-box">
          <h1>과정 등록하기</h1>
          <PostRepository closeModal={closeModal} />
        </div>
      </div>
    </>
  );
};

export default MainModal;
