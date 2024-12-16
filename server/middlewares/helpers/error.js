// const { ValidationError } = require('express-validation'); // Optional, for handling validation errors
// const winston = require('winston'); // Optional, for logging errors

// Create a logger (optional, but recommended)
// const logger = winston.createLogger({
//   level: 'error',
//   format: winston.format.json(),
//   transports: [
//     new winston.transports.Console(),
//     new winston.transports.File({ filename: 'error.log' })
//   ]
// });

// Error handling middleware
const errorMiddleware = (err, req, res, next) => {
    // Log the error (optional)
    logger.error(err);
  
    // Handle specific error types if needed
    // if (err instanceof ValidationError) {
    //   return res.status(err.statusCode).json(err);
    // }
  
    // Default error response
    res.status(err.status || 500).json({
      message: err.message || 'Internal Server Error',
      error: process.env.NODE_ENV === 'development' ? err : {}
    });
  };
  
  module.exports = errorMiddleware;
