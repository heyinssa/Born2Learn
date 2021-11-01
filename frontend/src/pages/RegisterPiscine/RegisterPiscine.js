import { React } from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import './RegisterPiscine.scss';
import MDViewer from '../../components/Body/MDViewer';
import RegisterButton from './RegisterButton';

const temp =
  'https://raw.githubusercontent.com/euiminnn/Learn-Git-Branch/main/README.md';

const RegisterPiscine = ({ match }) => {
  return (
    <div className="register-container">
      <Header />
      <div className="body">
        <MDViewer url={temp}></MDViewer>
      </div>
      <Footer />
      <RegisterButton />
    </div>
  );
};

export default RegisterPiscine;
