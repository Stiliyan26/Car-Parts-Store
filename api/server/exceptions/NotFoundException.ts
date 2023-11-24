import HttpException from './HttpException';

class NotFoundException extends HttpException {
  constructor(entityName: string = 'Resourse') {
    super(404, `${entityName} not found!`);
  }
}

export default NotFoundException;