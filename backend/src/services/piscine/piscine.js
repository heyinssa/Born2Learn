import { PiscineModel, UserPiscineModel } from '../../models/index.js';
import { SubjectService } from '../index.js';
import ApiError from '../../modules/error.js';

/* Piscine (PK) */

async function getByPiscineId(piscine_id) {
  const piscine = await PiscineModel.getByPiscineId(piscine_id);

  if (!piscine) throw new ApiError(404, `Piscine not found: ${piscine_id}`);

  return piscine;
}

async function create(
  github_link, //
  readme_link,
) {
  const piscine = await PiscineModel.create(
    github_link, //
    readme_link,
  );

  return piscine;
}

async function update(
  piscine_id, //
  github_link,
  readme_link,
) {
  await getByPiscineId(piscine_id);

  const updated = await PiscineModel.update(
    piscine_id, //
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

  const users = await UserPiscineModel.getByPiscineId(piscine_id);

  return users;
}

export default {
  getByPiscineId,
  create,
  update,
  removeByPiscineId,
  getUsers,
};
