import { UserService } from '../../services/index.js';

/* User (PK) */

async function get(req, res, next) {
  const user_id = req.params.user;

  const user = await UserService.getByUserId(user_id);

  res.status(200).json(user);
}

async function create(req, res, next) {
  const {
    piscine_id, //
    readme_link,
    default_repository,
  } = req.body;

  const user = await UserService.create(
    piscine_id, //
    readme_link,
    default_repository,
  );

  res.status(200).json(user);
}

async function update(req, res, next) {
  const user_id = req.params.user;
  const {
    piscine_id, //
    readme_link,
    default_repository,
  } = req.body;

  const user = await UserService.update(
    user_id, //
    piscine_id, //
    readme_link,
    default_repository,
  );

  res.status(200).json(user);
}

async function remove(req, res, next) {
  const user_id = req.params.user;

  await UserService.removeByUserId(user_id);

  res.sendStatus(200);
}

/* User (Equal FK) */

async function getPiscines(req, res, next) {
  const user_id = req.params.user;

  const users = await UserService.getUsers(user_id);

  res.status(200).json(users);
}

async function registerPiscine(req, res, next) {
  const user_id = req.params.user;
  const piscine_id = req.params.piscine;

  const piscine = await UserService.registerPiscine(user_id, piscine_id);

  res.status(200).json(piscine);
}

async function unregisterPiscine(req, res, next) {
  const user_id = req.params.user;
  const piscine_id = req.params.piscine;

  await UserService.unregisterPiscine(user_id, piscine_id);

  res.sendStatus(200);
}

async function getSubjects(req, res, next) {
  const user_id = req.params.user;

  const users = await UserService.getUsers(user_id);

  res.status(200).json(users);
}

async function registerSubject(req, res, next) {
  const user_id = req.params.user;
  const subject_id = req.params.subject;

  const subject = await UserService.registerSubject(user_id, subject_id);

  res.status(200).json(subject);
}

async function unregisterSubject(req, res, next) {
  const user_id = req.params.user;
  const subject_id = req.params.subject;

  await UserService.unregisterSubject(user_id, subject_id);

  res.sendStatus(200);
}

export default {
  get,
  create,
  update,
  remove,
  getPiscines,
  registerPiscine,
  unregisterPiscine,
  getSubjects,
  registerSubject,
  unregisterSubject,
};
