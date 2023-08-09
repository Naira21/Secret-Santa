import 'reflect-metadata';
import express, { Request, Response } from 'express';
import { dbConnection } from './infrastructure/mariaDB/index';

const app = express();
const port = 3000;

// AppDataSource.initialize();
// .then(() => {
//   console.log('Connected to database');
// })
// .catch((error) => console.log('Error connecting to database:', error));

dbConnection.connect();

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

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
