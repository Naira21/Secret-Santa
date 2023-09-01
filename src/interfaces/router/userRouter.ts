import { Router } from 'express';
import { UserController } from '../controllers/userController';

export class UserRouter {
  private router: Router;

  constructor(private controller: UserController) {
    this.router = Router();
    this.bindRouters();
  }

  public getRouter(): Router {
    return this.router;
  }

  private bindRouters() {
    this.router.post(
      '/create',
      this.controller.createUser.bind(this.controller),
    );
  }
}
