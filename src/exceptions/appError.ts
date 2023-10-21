import { handler } from '../middleware/error/errorHandlerService';
import { HttpCodes } from '../lib/constants/httpCodes';

process.on('uncaughtException', (error: Error) => {
  handler.handleError(error);
  if (!handler.isTrustedError(error)) process.exit(1);
});

export class AppError extends Error {
  public readonly name: string;
  public readonly httpCode: HttpCodes;
  public readonly isOperational: boolean;

  constructor(
    name: string,
    httpCode: HttpCodes,
    description: string,
    isOperational: boolean,
  ) {
    super(description);

    Object.setPrototypeOf(this, new.target.prototype); // restore prototype chain

    this.name = name;
    this.httpCode = httpCode;
    this.isOperational = isOperational;

    Error.captureStackTrace(this);
  }
}
