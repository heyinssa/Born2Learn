import EvaluationController from './evaluation/evaluation.js';
import PiscineController from './piscine/piscine.js';
import SubjectController from './piscine/subject.js';
import UserController from './user/user.js';

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
 * @input req 에 값 들어옴, 누락된 값 없음
 * @return 리소스
 * @error Service 에러 일시
 */

export {
  EvaluationController, //
  PiscineController,
  SubjectController,
  UserController,
};
