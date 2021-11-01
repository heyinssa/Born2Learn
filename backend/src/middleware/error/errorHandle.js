import 'express-async-errors';
import ApiError from '../../modules/error.js';

async function errorPageNotFound(req, res, next) {
  throw new ApiError(404, `Page Not Found`);
}

async function errorConverter(error, req, res, next) {
  let newerror = error;
  if (!(error instanceof ApiError)) {
    const statusCode = error.statusCode || 500;
    const message = error.message || 'server error';
    newerror = new ApiError(statusCode, message);
  }
  next(newerror);
}

/**
 * 의문 :
 *    에러 메세지를 띄워줄 필요가 있을까?
 *    사용자가 이상한 입력을 하지 않을텐데,
 *    서버 log 에서 확인하면 되지, 이걸 메세지로 띄울 필요가 있을까
 */
async function errorHandler(error, req, res, next) {
  const { statusCode, message } = error;

  const body = {
    message,
  };
  res.status(statusCode).json(body);
}

export default {
  errorPageNotFound,
  errorConverter,
  errorHandler,
};
