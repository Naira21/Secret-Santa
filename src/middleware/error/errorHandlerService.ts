import { AppError } from '../../exceptions/appError';

class ErrorHandler {
  public handleError(err: Error): void {
    console.log('error', err);

    // await logger.logError(error);
  }

  public isTrustedError(error: Error) {
    if (error instanceof AppError) {
      return error.isOperational;
    }
    return false;
  }
}

export const handler = new ErrorHandler();
