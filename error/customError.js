class customError extends Error {
  constructor(message = '>>> unspecified custom error <<<', statusCode = 500) {
    super(message);
    this.statusCode = statusCode;
  }
}

module.exports = customError;
