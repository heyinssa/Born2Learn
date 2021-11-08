import { PiscineService, SubjectService } from '../../services/index.js';

/* Piscine (PK) */

async function getAll(req, res, next) {
  const piscines = await PiscineService.getAll();

  res.status(200).json(piscines);
}

async function get(req, res, next) {
  const piscine_id = req.params.piscine;

  const piscine = await PiscineService.getByPiscineId(piscine_id);

  res.status(200).json(piscine);
}

async function create(req, res, next) {
  const {
    name, //
    github_link,
    readme_link,
  } = req.body.data;

  const piscine = await PiscineService.create(
    name, //
    github_link,
    readme_link,
  );

  res.status(200).json(piscine);
}

async function update(req, res, next) {
  const piscine_id = req.params.piscine;
  const {
    name, //
    github_link,
    readme_link,
  } = req.body.data;

  const piscine = await PiscineService.update(
    piscine_id, //
    name,
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
  getAll,
  get,
  create,
  update,
  remove,
  getSubjects,
  getUsers,
};
