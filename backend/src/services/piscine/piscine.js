import {
  PiscineModel,
  SubjectModel,
  UserPiscineModel,
} from '../../models/index.js';
import { SubjectService } from '../index.js';
import ApiError from '../../modules/error.js';
import GithubApi from '../../modules/githubprocess.js';

/* Piscine (PK) */

async function getAll() {
  const piscines = await PiscineModel.getAll();

  return piscines;
}

async function getByPiscineId(piscine_id) {
  const piscine = await PiscineModel.getByPiscineId(piscine_id);

  if (!piscine) throw new ApiError(404, `Piscine not found: ${piscine_id}`);

  return piscine;
}

async function create(github_link) {
  const {
    piscine_name, //
    readme_link,
    subject_names,
  } = await GithubApi.processPiscine(github_link);
  const subject_list = await GithubApi.processSubject(
    github_link,
    subject_names,
  );

  const piscine = await PiscineModel.create(
    piscine_name,
    github_link,
    readme_link,
  );

  async function createSubject(subject) {
    await SubjectModel.create(
      piscine.piscine_id,
      subject.name,
      subject.evaluation_num,
      subject.subject_link,
      subject.evaluation_link,
      subject.default_repository,
    );
  }

  await Promise.all(subject_list.map(subject => createSubject(subject)));

  return piscine;
}

async function update(
  piscine_id, //
  name,
  github_link,
  readme_link,
) {
  await getByPiscineId(piscine_id);

  const updated = await PiscineModel.update(
    piscine_id, //
    name,
    github_link,
    readme_link,
  );

  return updated;
}

async function removeByPiscineId(piscine_id) {
  await getByPiscineId(piscine_id);

  await UserPiscineModel.removeByPiscineId(piscine_id);
  await SubjectService.removeByPiscineId(piscine_id);
  await PiscineModel.remove(piscine_id);
}

/* User (Equal FK) */

async function getUsers(piscine_id) {
  await getByPiscineId(piscine_id);

  const user_piscines = await UserPiscineModel.getByPiscineId(piscine_id);

  const users = user_piscines.map(user_piscine => user_piscine.user);

  return users;
}

export default {
  getAll,
  getByPiscineId,
  create,
  update,
  removeByPiscineId,
  getUsers,
};
