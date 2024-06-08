class ErrorHandler extends Error {
    constructor(message, statusCode) {
        super(message);//super is constructor for parent class
        this.statusCode = statusCode;
    }
}

export default ErrorHandler;