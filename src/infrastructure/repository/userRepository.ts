import { DataSource } from 'typeorm';
import { User } from '../../domain/user/user';

export class UserRepository {
  constructor(private dataSource: DataSource) {}

  // public async createUser(user: User): Promise<User> {
  //   return await this.dataSource.manager.create(User, user);
  // }

  public async saveUser(body: User): Promise<User> {
    const result = await this.dataSource.manager.save(body);
    return result;
  }
}
