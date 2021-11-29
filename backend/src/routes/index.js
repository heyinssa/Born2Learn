import { Router } from 'express';

import EvaluationRouter from './evaluation/evaluation.js';
import PiscineRouter from './piscine/piscine.js';
import SubjectRouter from './piscine/subject.js';
import UserRouter from './user/user.js';

/**
 * Route
 *
 * @note
 * 요청 url 에 맞는 컨트롤러 호출
 *
 * @role
 * 입력 validation ... (보류)
 * 적절한 Contoller 사용
 *
 * @interface
 * PK 에 대한 아래의 인터페이스 제공
 *   - getAll (option)
 *   - getByPK
 *   - create
 *   - update
 *   - removeByPK
 * 하위 계층 리소스 (Lower FK) 에 대해 아래의 인터페이스 제공
 *   - getFK
 * 동등 계층 리소스 (Equal FK) 에 대해 아래의 인터페이스 제공
 *   - getFK
 *   - createFK
 *   - updateFK
 *   - removeFK
 *
 * @input req 에 값 들어옴
 * @return 리소스
 * @error validation 통과 못한경우, Controller 에러 일시
 */

export default () => {
  const router = Router();

  router.use('/evaluations', EvaluationRouter);
  router.use('/piscines', PiscineRouter);
  router.use('/subjects', SubjectRouter);
  router.use('/users', UserRouter);

  router.get('/cookie', function (req, res, next) {
    res.cookie('visitors', '1', {
      expires: new Date(Date.now() + 900000),
      sameSite: 'none',
      secure: true,
    });
    // console.log(Date.now() + 1000 * 60);

    return res.send('Visitors created!');
  });

  router.use('/cookiedelete', function (req, res) {
    res.clearCookie('visitors');
    res.send('Visitors deleted.');
  });

  return router;
};
