const logger = require("./logger");

function terminate (server, options = { coredump: false, timeout: 500 }) {
  // Exit function
  const exit = code => {
    options.coredump ? process.abort() : process.exit(code)
  }

  return (code, reason) => (err, promise) => {
    if (err && err instanceof Error) {
    // Log error information, use a proper logging library here :)
    logger.error('error message: ' + err.message);
	logger.error('error stack: ' +  err.stack);
    }

    // Attempt a graceful shutdown
    server.close(exit)
    setTimeout(exit, options.timeout).unref()
  }
}

module.exports = terminate