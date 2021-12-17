const customError = require(__basedir + '/error/customError');

module.exports = (error, req, res, next) => {
  const status = error.statusCode || 500;
  const message =
    error instanceof customError
      ? error.message // the message of the  error, if it is a custom-error
      : '>>> something went wrong - check log <<<';

  console.log('>>> ERROR HANDLER:', status, error.message, error.data, '<<<');

  res.status(status).json({ message });
};
