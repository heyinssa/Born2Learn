import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Main.scss";
import { Header, Footer } from "components";

const getUserPiscinesAPI = "http://betti.kr:9000" + "/api/users";
const getPiscinesAPI = "http://betti.kr:9000" + "/api/piscines";

const usertempid = "026bcd81-2899-40c4-be3d-c661b4cffbd9";
const Main = ({ location }) => {
  const [userPiscine, setUserPiscine] = useState([]);
  const [piscineList, setPiscineList] = useState([]);

  useEffect(() => {
    console.log(location.state.userInfo.user_id);
    const id = location.state.userInfo.user_id;
    axios
      .get(getUserPiscinesAPI + "/" + usertempid + "/piscines")
      .then((response) => {
        console.log(response);
        setUserPiscine(response.data);
      })
      .catch((error) => {
        console.log(getUserPiscinesAPI);
        console.log(`getUserPiscineAPI 호출 실패! (:${usertempid})`);
      });
    axios
      .get(getPiscinesAPI)
      .then((response) => {
        console.log(response);
        setPiscineList(response.data);
      })
      .catch((error) => {
        console.log(`getPiscinesAPI 호출 실패!`);
      });
  }, []);

  return (
    <div className="main-container">
      <Header />
      <div className="main-page ttemp">
        <div className="main-block">
          <h1>참여 중인 과정</h1>

          <div className="parti">
            {userPiscine.map((e, index) => {
              const url = `/myPiscine/${index}`;
              return (
                <Link to={url}>
                  <div>{e.name}</div>
                </Link>
              );
            })}
          </div>
          <h1>등록 가능한 과정</h1>

          <div className="not-parti">
            {piscineList.map((e, index) => {
              const url = `/registerPiscine/${index}`;
              return (
                <Link to={url}>
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

export default Main;
