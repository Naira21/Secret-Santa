import { DataSource } from 'typeorm';

export interface IMariaDBConnection {
  connect: () => Promise<void>;
  getDataSource: () => DataSource;
}
