///////////////////////////////////////////////////////////
// @author : Mandeep Bisht
///////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////
// Custom Error class
class AppError extends Error {
    constructor(message, statusCode) {

        super(message);
        this.statusCode = statusCode;
        this.status = `${this.statusCode}`.startsWith('4') ? 'fail' : 'error';
        this.isOperational = true;
        Error.captureStackTrace(this, this.constructor);
    }
}
///////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////
// exposing app error class
module.exports = AppError;
///////////////////////////////////////////////////////////