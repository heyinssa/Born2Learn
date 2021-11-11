import { PiscineModel, UserPiscineModel } from '../../models/index.js';
import { SubjectService } from '../index.js';
import ApiError from '../../modules/error.js';
import GithubAPI from './githubapi';
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
  const piscine2 = GithubAPI(github_link);

  const piscine = await create(
    piscine2.name,
    piscine2.github_link,
    piscine2.readme_link,
  );

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
