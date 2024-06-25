import { Pool } from "pg";
import { UserRepository } from "../domain/UserRepository";
import { User } from "../domain/User";
import { UserId } from "../domain/UserId";
import { UserName } from "../domain/UserName";
import { UserEmail } from "../domain/UserEmail";
import { UserCratedAt } from "../domain/UserCreatedAd";

type PostgresUser = {
  id: string;
  name: string;
  email: string;
  created_at:Date
};

export class PostgresUserRepository implements UserRepository {
  client: Pool;

  constructor() {
    this.client = new Pool({
      connectionString: process.env.DATABASE_URL,
    });
  }
  async create(user: User): Promise<void> {
    const query = {
      text: "INSERT INTO users (id, name, email) VALUES ($1,$2,$3)",
      values: [user.id.value, user.name.value, user.email.value],
    };

    await this.client.query(query);
  }

  async getAll(): Promise<User[]> {
    const query = {
      text: "SELECT * FROM users",
    };

    const result = await this.client.query<PostgresUser>(query);

    return result.rows.map(
      (row) =>
        new User(
          new UserId(row.id),
          new UserName(row.name),
          new UserEmail(row.email),
          new UserCratedAt(row.created_at)
        )
    );
  }
}
