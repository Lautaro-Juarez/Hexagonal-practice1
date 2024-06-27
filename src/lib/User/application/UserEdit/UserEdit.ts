import {
  User,
  UserCratedAt,
  UserEmail,
  UserId,
  UserName,
  UserNotFoundError,
  UserRepository,
} from "../../domain/index.barrel";

export class UserEdit {
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

    const userExists = await this.repository.getOneById(user.id);

    if (!userExists) throw new UserNotFoundError("User not found");
    
    return this.repository.edit(user);
  }
}
