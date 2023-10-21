import { User } from '../../../domain/user/user';
import { UserRepository } from '../../../infrastructure/repository/userRepository';

export class CreateUserService {
  constructor(private userRepository: UserRepository) {}

  public async createUser(name: string, email: string): Promise<User | void> {
    const user = new User(null, name, email);
    const doesUserExist = await this.userRepository.checkIfUserWithEmailExists(
      email,
    );

    if (doesUserExist) throw 'Forbidden. User with this email exists';

    return await this.userRepository.saveUser(user);
  }
}
