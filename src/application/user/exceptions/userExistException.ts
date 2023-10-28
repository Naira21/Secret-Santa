export class UserExistException extends Error {
  constructor(message: string) {
    super(message);
  }
}
