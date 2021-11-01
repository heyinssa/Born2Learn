import { React } from 'react';
import Header from 'components/Header';
import './RegisterPiscine.scss';
import MDViewer from '../../components/Body/MDViewer';

const temp =
  'https://raw.githubusercontent.com/euiminnn/Learn-Git-Branch/main/README.md';

const RegisterPiscine = ({ match }) => {
  return (
    <div className="register-container">
      <Header />
      <div className="body">
        <MDViewer url={temp}></MDViewer>
      </div>
    </div>
  );
};

export default RegisterPiscine;
