import { DataSource } from 'typeorm';

export class UserRepository {
  constructor(private dbConnection: DataSource) {}

  public saveUser(body: object) {
    this.dbConnection.manager.save(body);
  }
}
