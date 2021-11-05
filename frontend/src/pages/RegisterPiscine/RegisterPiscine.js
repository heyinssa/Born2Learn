import { React } from 'react';
import { Header, Footer } from 'components';
import { MDViewer } from 'components/Body';
import RegisterButton from './RegisterButton';
import checkId from 'utils/checkId';
import './RegisterPiscine.scss';

const mdUrl =
  'https://raw.githubusercontent.com/euiminnn/Learn-Git-Branch/main/README.md';

const pdfUrl = 'http://www.africau.edu/images/default/sample.pdf?raw:true';

const RegisterPiscine = ({ match, location }) => {
  const id = checkId(location);
  return (
    <div className="register-container">
      <Header />
      <div className="register-page ttemp">
        <div className="register-block">
          <div className="register-box">
            <MDViewer className="md" url={mdUrl}></MDViewer>
            <object className="pdf" data={pdfUrl} type="application/pdf">
              alt : <a href={pdfUrl}>test.pdf</a>
            </object>
          </div>
        </div>
      </div>
      <Footer />
      <RegisterButton />
    </div>
  );
};

export default RegisterPiscine;
