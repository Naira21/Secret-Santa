import 'reflect-metadata';
import 'dotenv/config';
import express, { Express } from 'express';
import { DbConnection } from './infrastructure/mariaDB/database';
import { UserRepository } from './infrastructure/repository/userRepository';
import { IMariaDBConnection } from './infrastructure/mariaDB/database.interface';
import { UserController } from './interfaces/controllers/userController';
import { CreateUserService } from './application/user/useCases/createUserService';
import { UserRouter } from './interfaces/router/userRouter';

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

    //загальний раут, який відловлює усі
  }

  private useMiddlewares(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }
}

// AppDataSource.initialize();
// .then(() => {
//   console.log('Connected to database');
// })
// .catch((error) => console.log('Error connecting to database:', error));

// app.get('/users', async (req: Request, res: Response) => {
//   const users = await AppDataSource.getRepository(User).find();
//   res.json(users);
// });

// app.get('/users/:id', async function (req: Request, res: Response) {
//   const results = await AppDataSource.getRepository(User).findOneBy({
//     id: 1,
//   });
//   return res.send(results);
// });
// app.post('/users', async function (req: Request, res: Response) {
//   const user = await AppDataSource.getRepository(User).create({
//     id: 1,
//     name: 'Timber',
//     email: 'Saw',
//   });
//   const results = await AppDataSource.getRepository(User).save(user);
//   return res.send('User saved');
// });

// app.post('/users', async (req, res) => {
//   const manager = AppDataSource.manager;
//   const user = manager.create(User, {
//     id: 1,
//     name: 'Timber',
//     email: 'Saw',
//   });

//   await manager.save(user);
//   res.send('User saved');
// });
