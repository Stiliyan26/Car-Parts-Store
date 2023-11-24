import HttpException from './HttpException';

class NotAuthorizedException extends HttpException {
  constructor() {
    super(401, 'Not authorized. Please provide valid credentials or permissions.');
  }
}

export default NotAuthorizedException;