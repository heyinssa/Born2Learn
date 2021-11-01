import { React } from 'react';
import Header from 'components/Header';
import './MyPiscineView.scss';
import MDViewer from 'components/MDViewer';

const temp =
  'https://raw.githubusercontent.com/euiminnn/Learn-Git-Branch/main/piscine01/README.kr.md';

const MyPiscineView = ({ match }) => {
  return (
    <div className="mypiscine-container">
      <Header />
      <div className="body">
        <MDViewer url={temp}> </MDViewer>
      </div>
    </div>
  );
};

export default MyPiscineView;
