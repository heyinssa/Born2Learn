import {
  UserModel,
  UserPiscineModel,
  UserSubjectModel,
} from '../../models/index.js';
import { EvaluationService, PiscineService, SubjectService } from '../index.js';
import ApiError from '../../modules/error.js';
import request from 'request';

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
  const _user = await UserModel.getById(id);

  if (_user) throw new ApiError(404, `User is exsit: ${id}`);

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

  const subjects = user_subjects.map(user_subject => {
    return {
      is_finished: user_subject.is_finished,
      score: user_subject.score,
      repository: user_subject.repository,
      ...user_subject.subject,
    };
  });

  return subjects;
}

// TODO: subject 가 등록된 piscine 에도 가입하였는가?
async function registerSubject(user_id, subject_id) {
  await getByUserId(user_id);
  await SubjectService.getBySubjectId(subject_id);

  const is_finished = 0;
  const score = 0;
  let repository = 'none';

  const repository_name = Math.random().toString(36).substr(2, 11);

  const option = {
    uri: 'http://skyrich3.synology.me:9900/api/v4/projects',
    method: 'POST',
    headers: {
      'Authorization': "Bearer gP42jbDSXNj_tQpK9BsP"
    },
    body: {
      name: repository_name,
      visibility: 'public',
    },
    json: true,
  };

  await new Promise((resolve, reject) => {
    request.post(option, function (error, response, body) {
      if (error) reject();
      resolve(body);
    });
  })
    .then(() => {
      repository = `http://skyrich3.synology.me:9900/pisciner/${repository_name}`;
    })
    .catch(() => {
      throw new ApiError(404, `Repository build failed`);
    });

  const register = await UserSubjectModel.create(
    user_id, //
    subject_id,
    is_finished,
    score,
    repository,
  );

  return register;
}

async function setFinishSubject(
  user_id, //
  subject_id,
) {
  await getByUserId(user_id);
  await SubjectService.getBySubjectId(subject_id);

  // await EvaluationService.create(user_id, subject_id);

  const register = await UserSubjectModel.update(
    user_id, //
    subject_id,
    1,
    null,
    null,
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
  setFinishSubject,
  unregisterSubject,
};
