  import HttpException from './HttpException';

  class CreationFailedException extends HttpException {
    constructor(entityName: string) {
      super(500, `${entityName} creation failed!`);
    }
  }

  export default CreationFailedException;