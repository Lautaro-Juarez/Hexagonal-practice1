import { UserId, UserRepository } from "../../domain/index.barrel";

export class UserDelete {
  constructor(private repository: UserRepository) {}

  async run(id: string): Promise<void> {
    await this.repository.delete(new UserId(id));
  }
}
