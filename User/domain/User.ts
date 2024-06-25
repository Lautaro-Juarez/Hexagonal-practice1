import { UserCratedAt } from "./UserCreatedAd";
import { UserEmail } from "./UserEmail";
import { UserId } from "./UserId";
import { UserName } from "./UserName";

export class User {
  id: UserId;
  name: UserName;
  email: UserEmail;
  createdAt: UserCratedAt;

  constructor(id: UserId, name: UserName, email: UserEmail, createdAt: UserCratedAt) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.createdAt = createdAt;
  }
}
