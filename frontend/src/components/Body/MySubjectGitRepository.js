import React from 'react';
import { useEffect, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
// import axios from 'axios';

const url = 'https://github.com/euiminnn/Learn-Git-Branch';

function sleep(t) {
  return new Promise((resolve) => setTimeout(resolve, t));
}

const MySubjectGitRepository = () => {
  // const [reposiporyInfo, setReposiporyInfoUrl] = useState([]);
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
  });

  return (
    <div className="comp-temp">
      <h2>REPOSITORY URL</h2>
      <CopyToClipboard
        className="gitrepo"
        text={state.value}
        onCopy={() => copyAndReset()}
      >
        <button>{state.value}</button>
      </CopyToClipboard>
    </div>
  );
};

export default MySubjectGitRepository;
