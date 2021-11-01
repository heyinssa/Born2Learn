import { Router } from 'express';

import ElementRouter from './feedback/element.js';
import FeedbackRouter from './feedback/feedback.js';
import TeamRouter from './team/team.js';
import ProviderRouter from './user/provider.js';
import TesterRouter from './user/tester.js';
import VersionRouter from './version/version.js';

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

  router.use('/elements', ElementRouter);
  router.use('/feedbacks', FeedbackRouter);
  router.use('/teams', TeamRouter);
  router.use('/providers', ProviderRouter);
  router.use('/testers', TesterRouter);
  router.use('/versions', VersionRouter);

  return router;
};
