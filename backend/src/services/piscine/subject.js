import { SubjectModel, UserSubjectModel } from '../../models/index.js';
import ApiError from '../../modules/error.js';
import { EvaluationService, UserService } from '../index.js';

/* Subject (PK) */

async function getBySubjectId(subject_id) {
  const subject = await SubjectModel.getBySubjectId(subject_id);

  if (!subject) throw new ApiError(404, `Subject not found: ${subject_id}`);

  return subject;
}

async function create(
  piscine_id, //
  name,
  readme_link,
  default_repository,
) {
  const subject = await SubjectModel.create(
    piscine_id, //
    name,
    readme_link,
    default_repository,
  );

  return subject;
}

async function update(
  subject_id, //
  piscine_id,
  name,
  readme_link,
  default_repository,
) {
  await getBySubjectId(subject_id);

  const updated = await SubjectModel.update(
    subject_id, //
    piscine_id,
    name,
    readme_link,
    default_repository,
  );

  return updated;
}

async function removeBySubjectId(subject_id) {
  await getBySubjectId(subject_id);

  await EvaluationService.removeBySubjectId(subject_id);
  await UserSubjectModel.removeBySubjectId(subject_id);
  await SubjectModel.remove(subject_id);
}

/* Piscine (upper FK) */

async function getByPiscineId(piscine_id) {
  const subjects = await SubjectModel.getByPiscineId(piscine_id);

  return subjects;
}

async function removeByPiscineId(piscine_id) {
  const subjects = await SubjectModel.getByPiscineId(piscine_id);

  if (subjects)
    subjects.forEach(subject => removeBySubjectId(subject.subject_id));
}

/* User (Equal FK) */

async function getUsers(subject_id) {
  await getBySubjectId(subject_id);

  const user_subjects = await UserSubjectModel.getBySubjectId(subject_id);

  const users = await Promise.all(
    user_subjects.map(user_subject => {
      return UserService.getByUserId(user_subject.user_id);
    }),
  );

  return users;
}

export default {
  getBySubjectId,
  create,
  update,
  removeBySubjectId,
  getByPiscineId,
  removeByPiscineId,
  getUsers,
};
