import { UserId, UserNotFoundError, UserRepository } from "../../domain/index.barrel";

export class UserDelete {
  constructor(private repository: UserRepository) {}

  async run(id: string): Promise<void> {

    const userExists = await this.repository.getOneById(new UserId(id));

    if (!userExists) throw new UserNotFoundError("User not found");
    
    await this.repository.delete(new UserId(id));
  }
}
