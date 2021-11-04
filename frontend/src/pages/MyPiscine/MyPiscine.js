import { React, useState, useEffect } from 'react';
import { Header, Footer } from 'components';
import { Link } from 'react-router-dom';

import './MyPiscine.scss';
import axios from 'axios';

const getPiscineSubjectAPI = 'http://betti.kr:9000' + '/api/piscines';

const MyPiscine = ({ match, location }) => {
  const id = location.state.id;
  const piscine = location.state.piscine;

  const [userPiscineSubjectList, setUserPiscineSubjectList] = useState([]);
  const index = match.params.index.substring(0);

  const getUserPiscine = (id) => {
    axios
      .get(getPiscineSubjectAPI + '/' + piscine.piscine_id + '/subjects')
      .then((response) => {
        setUserPiscineSubjectList(response.data);
      })
      .catch((error) => {
        console.log(`getPiscineSubjectAPI 호출 실패!`);
      });
  };

  useEffect(() => {
    getUserPiscine(id);
  }, []);

  return (
    <div className="mypiscine-container">
      <Header />
      <div className="mypiscine-page ttemp">
        <div className="mypiscine-box">
          <h1 className="title">Git Branch Piscine</h1>
          <h2 className="subtitle">Git Branch에 대해 배워봅시다!</h2>
        </div>
        <div className="mypiscine-box">
          <div className="dummy">
            {userPiscineSubjectList.map((e, idx) => {
              console.log(e);
              const url = `/myPiscine/view/${index}-${idx}`;
              return (
                <Link
                  to={{
                    pathname: url,
                    state: { id: id },
                  }}
                >
                  <div>{e.name}</div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyPiscine;
