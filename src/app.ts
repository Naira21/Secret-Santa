import 'reflect-metadata';
import 'dotenv/config';
import express, { Express } from 'express';
import { UserRepository } from './infrastructure/repository/userRepository';
import { IMariaDBConnection } from './infrastructure/mariaDB/database.interface';
import { UserController } from './interfaces/controllers/userController';
import { CreateUserService } from './application/user/useCases/createUserService';
import { UserRouter } from './interfaces/router/userRouter';
import { handler } from './middleware/error/errorHandlerService';

export class App {
  private app: Express;
  private port: number;

  constructor(private dbConnection: IMariaDBConnection) {
    this.app = express();
    this.port = process.env.APP_PORT;
  }

  public async runServer(): Promise<void> {
    try {
      await this.dbConnection.connect();
      this.useMiddlewares();
      this.createApp();

      this.app.listen(this.port, () => {
        console.log(`Server is listening on port ${this.port}`);
      });
    } catch (error) {}
  }

  private createApp(): void {
    const userRepository = new UserRepository(
      this.dbConnection.getDataSource(),
    );

    const createUserService = new CreateUserService(userRepository);

    const userController = new UserController(createUserService);

    const userRouter = new UserRouter(userController);

    this.app.use('/user', userRouter.getRouter());

    this.app.use((err: Error) => {
      handler.handleError(err);
    });
  }

  private useMiddlewares(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }
}
