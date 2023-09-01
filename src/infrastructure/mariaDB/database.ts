import { DataSource } from 'typeorm';
import { IMariaDBConnection } from './database.interface';
import { User } from '../../domain/user/user';
export class DbConnection implements IMariaDBConnection {
  private dataSource: DataSource;

  constructor() {
    this.dataSource = new DataSource({
      type: 'mariadb',
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [User],
      synchronize: true,
      logging: false,
      subscribers: [],
      migrations: [],
    });
  }

  public async connect(): Promise<void> {
    try {
      await this.dataSource.initialize();
      console.log('Connected to database');
    } catch (error) {
      console.log('Error connecting to database:', error);
    }
  }

  public getDataSource(): DataSource {
    return this.dataSource;
  }
}
