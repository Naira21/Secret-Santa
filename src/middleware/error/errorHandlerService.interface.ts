import { Response, Request, NextFunction } from 'express';

export interface IErrorHandlerService {
  handle(err: Error, req: Request, res: Response, next: NextFunction): void;
}
