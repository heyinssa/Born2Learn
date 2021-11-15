import { React, useState, useEffect } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import axios from 'axios';

import MySubjectTitleEvaluation from './MySubjectTitleEvaluation';

const getUserSubjectAPI = 'https://betti.kr:9000' + '/api/users';

// const url = 'https://github.com/euiminnn/Learn-Git-Branch';

function sleep(t) {
  return new Promise((resolve) => setTimeout(resolve, t));
}

const MySubjectTitle = ({ user_id, subject }) => {
  const [isFinished, setIsFinished] = useState(false);
  const [isLoading, setIsLoading] = useState();
  const [isRegister, setIsRegister] = useState(false);
  // const [userState, setUserState] = useState('done');]
  const [state, setState] = useState(false);
  const [repositoryURL, setRepositoryURL] = useState('');

  const copyAndReset = async () => {
    setState(true);
    await sleep(1000);
    setState(false);
  };

  const checkRegister = (userSubjects) => {
    userSubjects.forEach((userSubject) => {
      if (userSubject.subject_id == subject.subject_id) {
        setIsRegister(true);
        setIsFinished(userSubject.is_finished);
        setRepositoryURL(userSubject.repository);
      }
    });
  };

  const fetchUserSubjects = async () => {
    await axios
      .get(getUserSubjectAPI + '/' + user_id + '/subjects')
      .then((response) => {
        // setUserSubjects(response.data);
        checkRegister(response.data);
        setIsLoading(true);
      })
      .catch((error) => {
        console.log('getUserSubjectsAPI 호출 실패!');
      });
  };

  const handleRegsiter = () => {
    // setIsRegister(true);
    axios
      .post(
        getUserSubjectAPI + '/' + user_id + '/subjects/' + subject.subject_id
      )
      .then((response) => {
        const userSubject = response.data;

        setIsRegister(true);
        setIsFinished(userSubject.is_finished);
        setRepositoryURL(userSubject.repository);
      })
      .catch((error) => {
        console.log(`getUserSubjectAPI POST 실패! ${subject.subject_id}`);
      });
  };

  useEffect(() => {
    setIsLoading(false);
    fetchUserSubjects();
  }, []);

  return (
    <div className="mysubject-box">
      {/* 컴포넌트 경계 */}
      <div className="mysubject-box-title">
        {/* {userState === 'done' && (
          <img
            class="state"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/42_Logo.svg/1024px-42_Logo.svg.png"
            alt="done"
          />
        )} */}
        <div className="subject">
          <h3>{subject.piscine.name}</h3>
          <h1>{subject.name}</h1>
        </div>
        <div className="percent">100%</div>
      </div>
      {/* 컴포넌트 경계 */}
      {!isRegister && isLoading && (
        <div className="registerbutton">
          <button onClick={handleRegsiter}> Register </button>
        </div>
      )}
      {isRegister && isLoading && (
        <>
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
          <MySubjectTitleEvaluation
            user_id={user_id}
            subject={subject}
            isFinished={isFinished}
          />
          {/* 컴포넌트 경계 */}
        </>
      )}
    </div>
  );
};

export default MySubjectTitle;
