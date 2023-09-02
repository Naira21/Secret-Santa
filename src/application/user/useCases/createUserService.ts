import { User } from '../../../domain/user/user';
import { UserRepository } from '../../../infrastructure/repository/userRepository';

export class CreateUserService {
  constructor(private userRepository: UserRepository) {}

  public async createUser(name: string, email: string): Promise<User> {
    const user = new User(null, name, email);
    console.log(user);

    return await this.userRepository.saveUser(user);
  }
  // клас окремий коменд квери й прокинути його як боді
  //очікую, що повернеться Юзер
}
