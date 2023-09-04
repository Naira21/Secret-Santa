import { DataSource, FindOptionsWhere } from 'typeorm';
import { User } from '../../domain/user/user';
import { IUserRepository } from './userRepository.interface';
export class UserRepository implements IUserRepository {
  constructor(private dataSource: DataSource) {}

  public async saveUser(user: User): Promise<User> {
    const result = await this.dataSource.manager.save(user);

    return result;
  }

  public async checkIfUserWithEmailExists(email: string): Promise<Boolean> {
    const doesUserExist = await this.dataSource.manager.findOne(User, {
      where: {
        email: email,
      } as FindOptionsWhere<User>,
    });

    return doesUserExist ? true : false;
  }
}
