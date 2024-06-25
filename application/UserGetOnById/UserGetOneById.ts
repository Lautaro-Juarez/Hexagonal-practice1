import { User, UserId, UserNotFoundError, UserRepository } from "../../domain/index.barrel";

export class UserGetOneById {
  constructor(private repository: UserRepository) {}
  async run(id: string): Promise<User> {
    const user = await this.repository.getOneById(new UserId(id));

    if (!user) throw new UserNotFoundError("User not found");

    return user;
  }
}
