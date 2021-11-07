import { React, useState, useEffect } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import axios from 'axios';

import MySubjectTitleEvaluation from './MySubjectTitleEvaluation';

const getUserSubjectAPI = 'http://betti.kr:9000' + '/api/users';

// const url = 'https://github.com/euiminnn/Learn-Git-Branch';

function sleep(t) {
  return new Promise((resolve) => setTimeout(resolve, t));
}

const MySubjectTitle = ({ user_id, subject }) => {
  const [myPiscine, setMyPiscine] = useState([]);
  const [userState, setUserState] = useState('done');
  const [state, setState] = useState(false);
  const [repositoryURL, setRepositoryURL] = useState('');

  const copyAndReset = async () => {
    setState(true);
    await sleep(1000);
    setState(false);
  };

  useEffect(() => {
    setRepositoryURL(subject.default_repository);
  }, []);

  return (
    <div className="mysubject-box">
      {/* 컴포넌트 경계 */}
      <div className="mysubject-box-title">
        {userState === 'done' && (
          <img class="state" src="../../logo192.png" alt="done" />
        )}
        <div className="subject">
          <h3>{subject.piscine.name}</h3>
          <h1>{subject.name}</h1>
        </div>
        <div className="percent">100%</div>
      </div>
      {/* 컴포넌트 경계 */}
      <div className="mysubject-box-gitbox">
        <h2>REPOSITORY URL</h2>
        <CopyToClipboard
          className="gitrepo-button"
          text={repositoryURL}
          onCopy={() => copyAndReset()}
        >
          <button>{state ? 'copied' : repositoryURL}</button>
        </CopyToClipboard>
      </div>
      {/* 컴포넌트 경계 */}
      <MySubjectTitleEvaluation user_id={user_id} subject={subject} />
      {/* 컴포넌트 경계 */}
    </div>
  );
};

export default MySubjectTitle;

// useEffect(() => {
// const asyncProcess = async () => {
//   axios
//     .get(url)
//     .then((response) => {
//       console.log(response.data);
//       setReposiporyUrl(response.data);
//       state.value = url;
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };
// asyncProcess();
// });
