//створює ДТО

import { Response, Request, NextFunction } from 'express';
import { CreateUserService } from '../../application/user/useCases/createUserService';

export class UserController {
  constructor(private createUserService: CreateUserService) {}

  public async createUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, email } = req.body;
      const newUser = await this.createUserService.createUser(name, email);

      return res.status(200).json({ newUser });
    } catch (error) {
      return res.status(500).json('This user already exists!');
    }
  }
}
