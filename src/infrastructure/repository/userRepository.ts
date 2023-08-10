import { DataSource } from 'typeorm';
import { User } from '../../domain/user/user';

export class UserRepository {
  private entity: object;

  constructor(private dbConnection: DataSource) {
    this.entity = User;
  }

  public saveUser(body: object) {
    this.dbConnection.manager.save(body);
  }

  public async createUser(body: object) {
    return await this.entity.create(body);
  }
}
