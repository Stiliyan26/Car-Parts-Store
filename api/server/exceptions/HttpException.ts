class HttpException extends Error {
  private _status: number;
  private _message: string;
  constructor(status: number, message: string) {
    super(message);
    this._status = status;
    this._message = message;
  }

  get status(): number {
    return this._status
  }

  set status(status: number) {
    this._status = status;
  }

  get message(): string {
    return this._message;
  }

  set message(message: string) {
    this._message = message;
  }
}

export default HttpException;