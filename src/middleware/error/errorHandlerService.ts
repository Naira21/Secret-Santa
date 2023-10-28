import { Response, Request, NextFunction } from 'express';
import { HttpCodes } from '../../lib/constants/httpCodes';
import { UserExistException } from '../../application/user/exceptions/userExistException';

export class ErrorHandler {
  public handle(
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction,
  ): void {
    switch (true) {
      case err instanceof UserExistException:
        res
          .status(HttpCodes.BAD_REQUEST)
          .json({ code: 'bad_request', message: err.message });

        return;

      default:
        res
          .status(HttpCodes.INTERNAL_SERVER_ERROR)
          .json({ code: 'internal_server_error', message: err.message });
    }
  }
}
