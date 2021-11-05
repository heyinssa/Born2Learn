import { React } from 'react';
import { Header, Footer } from 'components';
import { MDViewer } from 'components/Body';
import MySubjectTitle from './MySubjectTitle';
import checkId from 'utils/checkId';
import './MySubjectView.scss';

const temp =
  'https://raw.githubusercontent.com/euiminnn/Learn-Git-Branch/main/piscine01/README.kr.md';

const MySubjectView = ({ match, location }) => {
  const id = checkId(location);
  const subject = location.state.subject;

  return (
    <div className="mysubject-container">
      <Header />
      <div className="subjectview-page ttemp">
        <div className="main-block">
          <MySubjectTitle></MySubjectTitle>
          <MDViewer url={temp}> </MDViewer>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MySubjectView;
