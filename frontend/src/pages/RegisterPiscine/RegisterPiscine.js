import { React } from 'react';
import { Header, Footer } from 'components';
import { MDViewer } from 'components/Body';
import RegisterButton from './RegisterButton';
import './RegisterPiscine.scss';

const rmUrl =
  'https://raw.githubusercontent.com/euiminnn/Learn-Git-Branch/main/README.md';

const pdfUrl = 'http://www.africau.edu/images/default/sample.pdf?raw:true';

const RegisterPiscine = ({ match }) => {
  return (
    <div className="register-container">
      <Header />
      <div className="register-page">
        <MDViewer className="md" url={rmUrl}></MDViewer>
        <object className="pdf" data={pdfUrl} type="application/pdf">
          alt : <a href={pdfUrl}>test.pdf</a>
        </object>
      </div>
      <Footer />
      <RegisterButton />
    </div>
  );
};

export default RegisterPiscine;
