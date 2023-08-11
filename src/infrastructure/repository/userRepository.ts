import { DataSource, EntityTarget } from 'typeorm';
import { User } from '../../domain/user/user';

export class UserRepository {
  private entity: EntityTarget<User>;

  constructor(private dbConnection: DataSource) {
    this.entity = User;
  }

  public saveUser(body: EntityTarget<User>) {
    this.dbConnection.manager.save(body);
  }

  public async createUser(body: EntityTarget<User>) {
    const createUser = await this.dbConnection.manager.create(body);
    return createUser;
  }
}
