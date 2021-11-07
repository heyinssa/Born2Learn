import { EvaluationService, UserService } from '../../services/index.js';

/* User (PK) */

async function getAll(req, res, next) {
  const users = await UserService.getAll();

  res.status(200).json(users);
}

async function get(req, res, next) {
  const user_id = req.params.user;

  const user = await UserService.getByUserId(user_id);

  res.status(200).json(user);
}

async function login(req, res, next) {
  const {
    id, //
    password,
  } = req.body.data;

  const user = await UserService.getByLogin(id, password);

  res.status(200).json(user);
}

async function getValidId(req, res, next) {
  const id = req.params.id;

  await UserService.getById(id).catch(() => {
    return res.sendStatus(200);
  });

  return res.sendStatus(404);
}

async function create(req, res, next) {
  const {
    id, //
    password,
  } = req.body.data;

  const user = await UserService.create(
    id, //
    password,
  );

  res.status(200).json(user);
}

async function update(req, res, next) {
  const user_id = req.params.user;
  const {
    id, //
    password,
  } = req.body.data;

  const user = await UserService.update(
    user_id, //
    id, //
    password,
  );

  res.status(200).json(user);
}

async function remove(req, res, next) {
  const user_id = req.params.user;

  await UserService.removeByUserId(user_id);

  res.sendStatus(200);
}

/* Evaluation (lower FK) */

async function getEvaluations(req, res, next) {
  const user_id = req.params.user;
  const evaluations = [];

  evaluations.push(...(await EvaluationService.getByEvaluatorId(user_id)));
  evaluations.push(...(await EvaluationService.getByEvaluateeId(user_id)));

  res.status(200).json(evaluations);
}

/* Piscine (Equal FK) */

async function getPiscines(req, res, next) {
  const user_id = req.params.user;

  const piscines = await UserService.getPiscines(user_id);

  res.status(200).json(piscines);
}

async function registerPiscine(req, res, next) {
  const user_id = req.params.user;
  const piscine_id = req.params.piscine;

  const register = await UserService.registerPiscine(user_id, piscine_id);

  res.status(200).json(register);
}

async function unregisterPiscine(req, res, next) {
  const user_id = req.params.user;
  const piscine_id = req.params.piscine;

  await UserService.unregisterPiscine(user_id, piscine_id);

  res.sendStatus(200);
}

/* Subject (Equal FK) */

async function getSubjects(req, res, next) {
  const user_id = req.params.user;

  const subjects = await UserService.getSubjects(user_id);

  res.status(200).json(subjects);
}

async function registerSubject(req, res, next) {
  const user_id = req.params.user;
  const subject_id = req.params.subject;

  const register = await UserService.registerSubject(user_id, subject_id);

  res.status(200).json(register);
}

async function unregisterSubject(req, res, next) {
  const user_id = req.params.user;
  const subject_id = req.params.subject;

  await UserService.unregisterSubject(user_id, subject_id);

  res.sendStatus(200);
}

export default {
  getAll,
  get,
  login,
  getValidId,
  create,
  update,
  remove,
  getEvaluations,
  getPiscines,
  registerPiscine,
  unregisterPiscine,
  getSubjects,
  registerSubject,
  unregisterSubject,
};
