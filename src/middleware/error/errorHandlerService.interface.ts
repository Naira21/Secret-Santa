import { Request, Response, NextFunction } from 'express';
import { AppError } from '../../exceptions/appError';

export interface IErrorHandlerService {
  error: Error;
  isTrustedError(error: Error): boolean;
  handleTrustedError(error: AppError, response: Response): void;
  handleError(error: Error | AppError, response?: Response): void;
  catch: (req: Request, res: Response, next: NextFunction) => void;
}
