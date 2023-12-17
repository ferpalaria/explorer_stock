const { verify } = require('jsonwebtoken');
const AppError = require('../utils/AppError');
const authConfig = require('../configs/auth');

function ensureAuthenticated(request, response, next) {
  // const authHeader = request.headers.authorization;
  const authHeader = request.headers;

  // if (!authHeader) {
  if (!authHeader.cookie) {
    throw new AppError('JWT token não informado', 401);
  }

  const [, token] = authHeader.split('token=');

  try {
    const { role, sub: user_id } = verify(token, authConfig.jwt.secret);

    // insere o ID do usuário em todas as requisições
    request.user = {
      id: Number(user_id),
      role
    };

    return next();
  } catch {
    throw new AppError('Invalid JWT token', 401);
  }
}

module.exports = ensureAuthenticated;