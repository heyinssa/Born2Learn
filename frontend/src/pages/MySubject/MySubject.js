import { React } from 'react';
import { Header, Footer } from 'components';
import { MDViewer } from 'components/Body';
import MySubjectTitle from './MySubjectTitle';
import checkId from 'utils/checkId';
import './MySubject.scss';

const temp =
  'https://raw.githubusercontent.com/euiminnn/Learn-Git-Branch/main/piscine01/README.kr.md';

const MySubject = ({ match, location }) => {
  const user_id = checkId(location);
  const subject = location.state.subject;

  return (
    <div className="mysubject-container">
      <Header user_id={user_id} />
      <div className="mysubject-page ttemp">
        <div className="mysubject-block">
          <MySubjectTitle></MySubjectTitle>
          <MDViewer url={temp}> </MDViewer>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MySubject;
