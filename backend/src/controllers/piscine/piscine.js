import { PiscineService, SubjectService } from '../../services/index.js';

/* Piscine (PK) */

async function get(req, res, next) {
  const piscine_id = req.params.piscine;

  const piscine = await PiscineService.getByPiscineId(piscine_id);

  res.status(200).json(piscine);
}

async function create(req, res, next) {
  const {
    github_link, //
    readme_link,
  } = req.body;

  const piscine = await PiscineService.create(
    github_link, //
    readme_link,
  );

  res.status(200).json(piscine);
}

async function update(req, res, next) {
  const piscine_id = req.params.piscine;
  const {
    github_link, //
    readme_link,
  } = req.body;

  const piscine = await PiscineService.update(
    piscine_id, //
    github_link,
    readme_link,
  );

  res.status(200).json(piscine);
}

async function remove(req, res, next) {
  const piscine_id = req.params.piscine;

  await PiscineService.removeByPiscineId(piscine_id);

  res.sendStatus(200);
}

/* Subject (lower FK) */

async function getSubjects(req, res, next) {
  const piscine_id = req.params.piscine;

  const subjects = await SubjectService.getByPiscineId(piscine_id);

  res.status(200).json(subjects);
}

/* User (Equal FK) */

async function getUsers(req, res, next) {
  const piscine_id = req.params.piscine;

  const users = await PiscineService.getUsers(piscine_id);

  res.status(200).json(users);
}

export default {
  get,
  create,
  update,
  remove,
  getSubjects,
  getUsers,
};
