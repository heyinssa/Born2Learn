import ElementModel from './feedback/element.js';
import FeedbackModel from './feedback/feedback.js';
import ImageModel from './media/image.js';
import TeamModel from './team/team.js';
import ProviderTeamModel from './user/provider_team.js';
import ProviderModel from './user/provider.js';
import TesterModel from './user/tester.js';
import VersionImageModel from './version/version_image.js';
import VersionModel from './version/version.js';

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
  ElementModel,
  FeedbackModel,
  ImageModel,
  TeamModel,
  ProviderTeamModel,
  ProviderModel,
  TesterModel,
  VersionImageModel,
  VersionModel,
};
