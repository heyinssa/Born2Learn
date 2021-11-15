import { React } from 'react';
import { Header, Footer } from 'components';
import { MDViewer } from 'components/Body';
import RegisterButton from './RegisterButton';
import checkId from 'utils/checkId';
import './RegisterPiscine.scss';
import axios from 'axios';
import { useHistory } from 'react-router';

const getPiscineAPI = 'https://betti.kr:9000' + '/api/users/';

// const mdUrl =
//   'https://raw.githubusercontent.com/euiminnn/Learn-Git-Branch/main/README.md';

// const pdfUrl = 'http://www.africau.edu/images/default/sample.pdf?raw:true';
// const htmlUrl = 'https://woosetcho.github.io/html_css_piscine/pages/day01.html';

const RegisterPiscine = ({ match, location }) => {
  const history = useHistory();
  const user_id = checkId(location);
  let piscine;
  if (user_id) piscine = location.state.piscine;

  const registerPiscine = () => {
    axios
      .post(getPiscineAPI + '/' + user_id + '/piscines/' + piscine.piscine_id)
      .then((response) => {
        history.push({
          pathname: '/main',
          state: { user_id },
        });
      })
      .catch((error) => {
        console.log('피신 등록 실패!');
      });
  };

  return (
    <div className="register-container">
      <Header user_id={user_id} />
      <div className="register-page ttemp">
        <div className="register-block">
          <div className="register-box">
            <MDViewer className="md" url={piscine.readme_link}></MDViewer>
            {/*
            // pdf 뷰어
            <object className="pdf" data={pdfUrl} type="application/pdf">
              alt : <a href={pdfUrl}>test.pdf</a>
            </object>
            // html 뷰어
            <object className="pdf" data={htmlUrl} type="text/html">
              alt : <a href={htmlUrl}>test.pdf</a>
            </object> */}
          </div>
        </div>
      </div>
      <Footer />
      <RegisterButton registerPiscine={registerPiscine} user_id={user_id} />
    </div>
  );
};

export default RegisterPiscine;
