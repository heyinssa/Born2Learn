import { React } from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import './RegisterPiscine.scss';
import MDViewer from '../../components/Body/MDViewer';
import RegisterButton from './RegisterButton';

const rmUrl =
  'https://raw.githubusercontent.com/euiminnn/Learn-Git-Branch/main/README.md';

const pdfUrl = 'http://www.africau.edu/images/default/sample.pdf?raw:true';

const RegisterPiscine = ({ match }) => {
  return (
    <div className="register-container">
      <Header />
      <div className="body">
        <MDViewer url={rmUrl}></MDViewer>
      </div>
      <object className="body" data={pdfUrl} type="application/pdf">
        alt : <a href={pdfUrl}>test.pdf</a>
      </object>
      <Footer />
      <RegisterButton />
    </div>
  );
};

export default RegisterPiscine;
