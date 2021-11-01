import 'express-async-errors';
import ErrorHandle from '../middleware/error/errorHandle.js';

export default [
  ErrorHandle.errorPageNotFound, //
  ErrorHandle.errorConverter,
  ErrorHandle.errorHandler,
];
