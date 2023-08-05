import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'mariadb',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'ssanta',
  entities: ['src/entity/*.ts'],
  synchronize: true,
  logging: true,
  subscribers: [],
  migrations: [],
});
