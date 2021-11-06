import { React, useState, useEffect } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import axios from 'axios';

const getUserSubjectAPI =
  'http://ec2-3-34-2-242.ap-northeast-2.compute.amazonaws.com:9001/api/users';

const url = 'https://github.com/euiminnn/Learn-Git-Branch';

function sleep(t) {
  return new Promise((resolve) => setTimeout(resolve, t));
}

const MySubjectTitle = () => {
  const [myPiscine, setMyPiscine] = useState([]);
  const [userState, setUserState] = useState('done');
  const [state, setState] = useState({
    value: url,
    copied: false,
  });

  const copyAndReset = async () => {
    setState({ value: 'copied', copied: true });
    await sleep(1000);
    setState({ value: url, copied: false });
  };

  useEffect(() => {
    const asyncProcess = async () => {
      axios
        .get(getUserSubjectAPI)
        .then((response) => {
          setUserState(response.data.state);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    asyncProcess();
  });

  return (
    <div className="mysubject-box">
      {/* 컴포넌트 경계 */}
      <div className="mysubject-box-title">
        {userState === 'done' && (
          <img class="state" src="../../logo192.png" alt="done" />
        )}
        <div className="subject">
          <h3>Piscine Name</h3>
          <h1>subject name</h1>
        </div>
        <div className="percent">100%</div>
      </div>
      {/* 컴포넌트 경계 */}
      <div className="mysubject-box-gitbox">
        <h2>REPOSITORY URL</h2>
        <CopyToClipboard
          className="gitrepo-button"
          text={state.value}
          onCopy={() => copyAndReset()}
        >
          <button>{state.value}</button>
        </CopyToClipboard>
      </div>
      {/* 컴포넌트 경계 */}
      <div className="mysubject-box-evaluationbox"></div>
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
