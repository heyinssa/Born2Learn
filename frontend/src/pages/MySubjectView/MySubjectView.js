import { React } from 'react';
import Header from 'components/Header';
import './MySubjectView.scss';

import MDViewer from 'components/Body/MDViewer';
import Line from 'components/Body/Line';
import MySubjectTitle from 'components/Body/MySubjectTitle';
import MySubjectGitRepository from 'components/Body/MySubjectGitRepository';
import UserProfile from 'components/Body/UserProfile';

const temp =
  'https://raw.githubusercontent.com/euiminnn/Learn-Git-Branch/main/piscine01/README.kr.md';

const MySubjectView = ({ match }) => {
  return (
    <div className="mysubject-container">
      <Header />
      <div className="body">
        {/* <div className="mypiscinebox"> */}
        <MySubjectTitle></MySubjectTitle>
        <Line></Line>
        <MySubjectGitRepository></MySubjectGitRepository>
        <UserProfile></UserProfile>
        <Line></Line>
        <MDViewer url={temp}> </MDViewer>
        {/* </div> */}
      </div>
    </div>
  );
};

export default MySubjectView;
