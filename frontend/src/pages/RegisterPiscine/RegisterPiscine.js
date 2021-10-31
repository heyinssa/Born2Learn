import { React } from 'react';
import Header from 'components/Header';
import './RegisterPiscine.scss';

const RegisterPiscine = ({ match }) => {
  const index = match.params.index.substring(0);
  return (
    <div className="register-container">
      <Header />
      <div className="body">
        <h1> 마크다운으로 불러올 것</h1>
        {index} 번째 페이지 선택.
      </div>
    </div>
  );
};

export default RegisterPiscine;
