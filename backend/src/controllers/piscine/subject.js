import { SubjectService } from '../../services/index.js';

/* Subject (PK) */

async function get(req, res, next) {
  const subject_id = req.params.subject;

  const subject = await SubjectService.getBySubjectId(subject_id);

  res.status(200).json(subject);
}

async function create(req, res, next) {
  const {
    piscine_id, //
    readme_link,
    default_repository,
  } = req.body;

  const subject = await SubjectService.create(
    piscine_id, //
    readme_link,
    default_repository,
  );

  res.status(200).json(subject);
}

async function update(req, res, next) {
  const subject_id = req.params.subject;
  const {
    piscine_id, //
    readme_link,
    default_repository,
  } = req.body;

  const subject = await SubjectService.update(
    subject_id, //
    piscine_id, //
    readme_link,
    default_repository,
  );

  res.status(200).json(subject);
}

async function remove(req, res, next) {
  const subject_id = req.params.subject;

  await SubjectService.removeBySubjectId(subject_id);

  res.sendStatus(200);
}

/* User (Equal FK) */

async function getUsers(req, res, next) {
  const subject_id = req.params.subject;

  const users = await SubjectService.getUsers(subject_id);

  res.status(200).json(users);
}

export default {
  get,
  create,
  update,
  remove,
  getUsers,
};
