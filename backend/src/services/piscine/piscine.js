import {
  PiscineModel,
  SubjectModel,
  UserPiscineModel,
} from '../../models/index.js';
import { SubjectService } from '../index.js';
import ApiError from '../../modules/error.js';
import githubapi from './githubprocess.js';
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

async function createWithGithubAPI(github_link) {
  const github_data = await githubapi.processName(github_link);
  const piscineContents = await githubapi.processPiscine(github_data);
  const readme_link = await githubapi.processReadme(piscineContents);
  const subject_list = await githubapi.processSubject(
    github_data,
    piscineContents,
  );
  console.log(subject_list);
  const piscine = await PiscineModel.create(
    github_data.name,
    github_link,
    readme_link,
  );

  subject_list.forEach(element => {
    SubjectModel.create(piscine.piscine_id, element.name, 3, null, null);
  });

  return piscine;
}

async function create(
  name, //
  github_link,
  readme_link,
) {
  const piscine = await PiscineModel.create(
    name, //
    github_link,
    readme_link,
  );

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
  createWithGithubAPI,
  create,
  update,
  removeByPiscineId,
  getUsers,
};
