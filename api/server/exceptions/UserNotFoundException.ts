import HttpException from './HttpException';

class UserNotFoundException extends HttpException {
  constructor(message: string) {
    super(401, message);
  }
}

export default UserNotFoundException;