const CREATED_CODE = 201;
const BAD_REQUEST_ERROR_CODE = 400;
const UNAUTHORIZED_ERROR_CODE = 401;
const FORBIDDEN_ERROR = 403;
const NOT_FOUND_ERROR_CODE = 404;
const CONFLICT_ERROR_CODE = 409;
const INTERNAL_SERVER_ERROR_CODE = 500;

const URL_REGULAR_EXP = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9-._~:/?#[\]@!$&'()*+,;=]*)?$/im;

const ALLOWED_CORS = [
  'http://mesto.grig.nomoredomainsrocks.ru',
  'https://mesto.grig.nomoredomainsrocks.ru',
  'http://api.mesto.grig.nomoredomainsrocks.ru',
  'https://api.mesto.grig.nomoredomainsrocks.ru',
  'http://158.160.99.77',
  'https://158.160.99.77',
  'http://localhost:3000',
];

const DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';

module.exports = {
  CREATED_CODE,
  BAD_REQUEST_ERROR_CODE,
  UNAUTHORIZED_ERROR_CODE,
  NOT_FOUND_ERROR_CODE,
  FORBIDDEN_ERROR,
  CONFLICT_ERROR_CODE,
  INTERNAL_SERVER_ERROR_CODE,
  URL_REGULAR_EXP,
  ALLOWED_CORS,
  DEFAULT_ALLOWED_METHODS,
};
