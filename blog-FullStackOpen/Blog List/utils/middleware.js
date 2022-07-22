const logger = require('./logger')

const tokenExtractor = (request, response, next) => {
  const authorization = request.get("authorization");
  if (authorization && authorization.toLowerCase().startsWith("bearer ")) {
    request.token = authorization.substring(7);
    console.log(request.token);
  }
  next();
};

const requestLogger = (request, response, next) => {
  logger.info("*REQUEST LOGGER(middleware):-");
  logger.info("Method:", request.method);
  logger.info("Path:  ", request.path);
  logger.info("Body:  ", request.body);
  logger.info("------------------------------------------");
  next();
};

module.exports = { tokenExtractor, requestLogger };
