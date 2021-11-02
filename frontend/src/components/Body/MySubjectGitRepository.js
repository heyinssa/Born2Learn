import React from 'react';
import { useEffect, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import axios from 'axios';

const url = 'https://github.com/euminnn/Learn-Git-Branch';

const MySubjectGitRepository = () => {
  const [reposiporyUrl, setReposiporyUrl] = useState([]);
  const [state, setState] = useState({
    value: url,
    copied: false,
  });

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
      <h2>MySubjectGitRepository</h2>
      <CopyToClipboard
        className="gitrepo"
        text={state.value}
        onCopy={() => setState({ value: 'copied', copied: true })}
      >
        <button>{state.value}</button>
      </CopyToClipboard>
      {/* <div className="gitrepo">Git Repository</div> */}
    </div>
  );
};

export default MySubjectGitRepository;
