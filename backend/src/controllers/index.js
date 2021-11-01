import ElementController from './feedback/element.js';
import FeedbackController from './feedback/feedback.js';
import TeamController from './team/team.js';
import ProviderController from './user/provider.js';
import TesterController from './user/tester.js';
import VersionController from './version/version.js';

/**
 * Controller
 *
 * @note
 * 요청 리소스에 맞는 서비스 호출하는 인터페이스 제공
 *
 * @role
 * 요청 종류에 따라 필요한 변수 뽑아내기
 * 적절한 Service 사용
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
 * @input req 에 값 들어옴, 누락된 값 없음
 * @return 리소스
 * @error Service 에러 일시
 */

export {
  ElementController,
  FeedbackController,
  TeamController,
  ProviderController,
  TesterController,
  VersionController,
};
