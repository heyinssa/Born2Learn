import { React } from 'react';
import { Header, Footer } from 'components';
import {
  MDViewer,
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
      <div className="subjectview-page ttemp">
        <MySubjectTitle></MySubjectTitle>
        <MySubjectGitRepository></MySubjectGitRepository>
        <UserProfile></UserProfile>
        <MDViewer url={temp}> </MDViewer>
      </div>
      <Footer />
    </div>
  );
};

export default MySubjectView;
