import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const MyEvaluationBox = ({ user_id, evaluationList }) => {
  //   const [eval, setIsFinish] = useState(false);

  //   const fetchIsFinish = async () => {
  //     axios
  //       .get(getUserEvaluationListAPI)
  //       .then((response) => {
  //         setUserEvaluationList(response.data);
  //       })
  //       .catch((error) => {
  //         console.log(`getUserEvaluationListAPI호출 에러!! ${error}`);
  //       });
  //   };

  //   useEffect(() => {
  //     fetchIsFinish();
  //   });

  return (
    <div className="main-box">
      <h1>진행중인 평가</h1>
      <div className="evaluation">
        {evaluationList.map((e, index) => {
          const url = `/myEvaluation/${index}`;
          return (
            // 여기서 분기가 들어가야함
            <Link
              to={{
                pathname: url,
                state: { user_id: user_id },
              }}
            >
              <div>
                <b>{e.subject_id}</b>
                <span>with ycha</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MyEvaluationBox;
