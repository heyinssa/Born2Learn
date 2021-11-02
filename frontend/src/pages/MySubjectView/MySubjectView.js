import { React } from 'react';
import { Header } from 'components';
import {
  MDViewer,
  Line,
  MySubjectTitle,
  MySubjectGitRepository,
  UserProfile,
} from 'components/Body';
import './MySubjectView.scss';

const temp =
  'https://raw.githubusercontent.com/euiminnn/Learn-Git-Branch/main/piscine01/README.kr.md';

const MySubjectView = ({ match }) => {
  return (
    <div className="mysubject-container">
      <Header />
      <div className="body">
        <MySubjectTitle></MySubjectTitle>
        <Line></Line>
        <MySubjectGitRepository></MySubjectGitRepository>
        <UserProfile></UserProfile>
        <Line></Line>
        <MDViewer url={temp}> </MDViewer>
      </div>
    </div>
  );
};

export default MySubjectView;
