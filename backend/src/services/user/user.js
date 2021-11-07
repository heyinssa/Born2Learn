import {
  UserModel,
  UserPiscineModel,
  UserSubjectModel,
} from '../../models/index.js';
import { EvaluationService, PiscineService, SubjectService } from '../index.js';
import ApiError from '../../modules/error.js';
import supertest from 'supertest';

const request = supertest('http://skyrich3.synology.me:9900');

/* User (PK) */

async function getAll() {
  const users = await UserModel.getAll();

  return users;
}

async function getByUserId(user_id) {
  const user = await UserModel.getByUserId(user_id);

  if (!user) throw new ApiError(404, `User not found: ${user_id}`);

  return user;
}

async function getById(id) {
  const user = await UserModel.getById(id);

  if (!user) throw new ApiError(404, `User not found: ${id}`);

  return user;
}

async function getByLogin(id, password) {
  const user = await UserModel.getByLogin(id, password);

  if (!user) throw new ApiError(404, `User not found: ${id}`);

  return user;
}

async function create(
  id, //
  password,
) {
  const user = await UserModel.create(
    id, //
    password,
  );

  return user;
}

async function update(
  user_id, //
  id,
  password,
) {
  await getByUserId(user_id);

  const updated = await UserModel.update(
    user_id, //
    id,
    password,
  );

  return updated;
}

async function removeByUserId(user_id) {
  await getByUserId(user_id);

  await EvaluationService.removeByEvaluateeId(user_id);
  await EvaluationService.removeByEvaluatorId(user_id);
  await UserPiscineModel.removeByUserId(user_id);
  await UserSubjectModel.removeByUserId(user_id);
  await UserModel.remove(user_id);
}

/* Piscine (Equal FK) */

async function getPiscines(user_id) {
  await getByUserId(user_id);

  const user_piscines = await UserPiscineModel.getByUserId(user_id);

  const piscines = user_piscines.map(user_piscine => user_piscine.piscine);

  return piscines;
}

async function registerPiscine(user_id, piscine_id) {
  await getByUserId(user_id);
  await PiscineService.getByPiscineId(piscine_id);

  const register = await UserPiscineModel.create(user_id, piscine_id);

  return register;
}

async function unregisterPiscine(user_id, piscine_id) {
  await getByUserId(user_id);
  await PiscineService.getByPiscineId(piscine_id);

  await UserPiscineModel.remove(user_id, piscine_id);
}

/* Subject (Equal FK) */

async function getSubjects(user_id) {
  await getByUserId(user_id);

  const user_subjects = await UserSubjectModel.getByUserId(user_id);

  const subjects = user_subjects.map(user_subject => user_subject.subject);

  return subjects;
}

// TODO: subject 가 등록된 piscine 에도 가입하였는가?
async function registerSubject(user_id, subject_id) {
  await getByUserId(user_id);
  await SubjectService.getBySubjectId(subject_id);

  const state = 0;
  const score = 0;
  const repository = 'none';

  const register = await UserSubjectModel.create(
    user_id, //
    subject_id,
    state,
    score,
    repository,
  );

  return register;
}

async function unregisterSubject(user_id, subject_id) {
  await getByUserId(user_id);
  await SubjectService.getBySubjectId(subject_id);

  await UserSubjectModel.remove(user_id, subject_id);
}

export default {
  getAll,
  getByUserId,
  getById,
  getByLogin,
  create,
  update,
  removeByUserId,
  getPiscines,
  registerPiscine,
  unregisterPiscine,
  getSubjects,
  registerSubject,
  unregisterSubject,
};
