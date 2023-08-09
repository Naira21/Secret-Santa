import 'reflect-metadata';
import express, { Request, Response, Express } from 'express';
import { dbConnection } from './infrastructure/mariaDB/index';

class App {
  private app: Express;
  private port: number;

  constructor() {
    this.app = express();
    this.port = 3000;
  }

  private useMiddlewares(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }

  public async runServer() {
    this.useMiddlewares();

    await dbConnection.connect();

    this.app.listen(this.port, () => {
      console.log(`Server is listening on port ${this.port}`);
    });
  }
}

const app = new App();
app.runServer();

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
