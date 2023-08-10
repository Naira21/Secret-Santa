import { DataSource } from 'typeorm';
import { IMariaDBConnection } from './database.interface';

// export const AppDataSource = new DataSource({
//   //costructor
//   // getter має бути
//   type: 'mariadb',
//   host: 'localhost',
//   port: 3306,
//   username: 'root',
//   password: '',
//   database: 'ssanta',
//   entities: ['src/entity/*.ts'],
//   synchronize: true,
//   logging: true,
//   subscribers: [],
//   migrations: [],
// });

export class DbConnection implements IMariaDBConnection {
  private dbConnection: DataSource;

  constructor() {
    this.dbConnection = new DataSource({
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
  }

  public async connect(): Promise<void> {
    try {
      await this.dbConnection.initialize();
      console.log('Connected to database');
    } catch (error) {
      console.log('Error connecting to database:', error);
    }
  }

  public getDbConnection() {
    return this.dbConnection;
  }
}
