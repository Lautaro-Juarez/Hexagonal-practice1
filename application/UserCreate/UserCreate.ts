import { User, UserCratedAt, UserEmail, UserId, UserName, UserRepository } from "../../domain/index.barrel";

export class UserCreate {
  constructor(private repository: UserRepository) {}
  async run(
    id: string,
    name: string,
    email: string,
    createdAt: Date
  ): Promise<void> {
    const user = new User(
      new UserId(id),
      new UserName(name),
      new UserEmail(email),
      new UserCratedAt(createdAt)
    );
    return this.repository.create(user);
  }
}
