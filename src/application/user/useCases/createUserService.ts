import { User } from '../../../domain/user/user';
import { UserExistException } from '../exceptions/userExistException';
import { UserRepository } from '../../../infrastructure/repository/userRepository';

export class CreateUserService {
  constructor(private userRepository: UserRepository) {}

  public async createUser(name: string, email: string): Promise<User> {
    const doesUserExist = await this.userRepository.checkIfUserWithEmailExists(
      email,
    );

    if (doesUserExist) {
      throw new UserExistException('Bad request');
    }

    const user = new User(null, name, email);

    return await this.userRepository.saveUser(user);
  }
}
