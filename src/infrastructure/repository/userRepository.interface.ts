import { User } from '../../domain/user/user';

export interface IUserRepository {
  saveUser: (user: User) => Promise<User>;
  checkIfUserWithEmailExists: (email: string) => Promise<Boolean>;
}
