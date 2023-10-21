//створює ДТО

import { Response, Request, NextFunction } from 'express';
import { CreateUserService } from '../../application/user/useCases/createUserService';
import { AppError } from '../../exceptions/appError';

export class UserController {
  constructor(private createUserService: CreateUserService) {}

  public async createUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, email } = req.body;
      const user = await this.createUserService.createUser(name, email);
      return res.status(200).json({ user });
    } catch (error) {
      throw new AppError(
        'Bad Request',
        400,
        `Customer with ${req.body.email} has already existed`,
        true,
      );
      //     if (!user) {
      //       throw new AppError({
      //         httpCode: HttpCodes.NOT_FOUND,
      //         description: 'User you are looking for does not exist',
      //       });
      //     }
    }
  }
}
