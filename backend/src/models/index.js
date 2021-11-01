import EvaluationModel from './evaluation/evaluation';
import PiscineModel from './piscine/piscine';
import SubjectModel from './piscine/subject';
import User_piscineModel from './user/user_piscine';
import User_subjectModel from './user/user_subject';
import UserModel from './user/user';

/**
 * Model
 *
 * @note
 * DB table 과 1:1 관계로 DB query를 추상화
 *
 * @role
 * DB 스키마 정의 및 필요시 table 생성
 * DB 와 정상적으로 통신하여 적절한 query 요청
 *
 * @interface
 * PK 에 대한 아래의 인터페이스 제공
 *   - getByPK
 *   - create
 *   - update
 *   - remove
 * FK 에 대한 아래의 인터페이스 제공
 *   - getByFK
 *
 * @input PK 가 유효해야함
 * @return query 결과
 * @error query 실패시
 */

export {
  EvaluationModel, //
  PiscineModel,
  SubjectModel,
  User_piscineModel,
  User_subjectModel,
  UserModel,
};
