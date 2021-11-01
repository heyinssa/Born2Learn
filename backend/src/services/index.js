import ElementService from './feedback/element.js';
import FeedbackService from './feedback/feedback.js';
import ImageService from './media/image.js';
import TeamService from './team/team.js';
import ProviderService from './user/provider.js';
import TesterService from './user/tester.js';
import VersionService from './version/version.js';

/**
 * Service
 *
 * @note
 * 비지니스 로직(서비스)단위로 리소스를 관리하는 인터페이스 제공
 *
 * @role
 * 유효한 PK 인지 확인
 * 유효한 FK 인지 확인 ... (보류)
 * 적절한 Model 사용
 * 외부 Model 필요시, 외부 Service 사용할 것
 *
 * @interface
 * PK 에 대한 아래의 인터페이스 제공
 *   - getByPK -> 없으면 throw
 *   - create
 *   - update
 *   - removeByPK -> 하위 계층 리소스도 remove
 * 상위 계층 리소스 Upper FK 에 대한 아래의 인터페이스 제공
 *   - getByFK
 *   - removeByFK -> removeByPK 호출
 * 동등 계층 리소스 Equal FK 에 대해 아래의 인터페이스 제공
 *   - getFK
 *   - createFK
 *   - updateFK
 *   - removeFK
 *
 * @input 정해진 parameter 은 다 들어오지만, 유효한 값은 아닐 수 있음
 * @return 리소스
 * @error 유효하지 않은 PK, Model 에러일시
 */

export {
  ElementService,
  FeedbackService,
  ImageService,
  TeamService,
  ProviderService,
  TesterService,
  VersionService,
};
