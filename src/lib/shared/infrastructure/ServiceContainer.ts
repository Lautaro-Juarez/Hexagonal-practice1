import { PostgresUserRepository } from "../../User/infrastructure/PostgresUserRepository";
import {
  UserCreate,
  UserDelete,
  UserEdit,
  UserGetAll,
  UserGetOneById,
} from "../../User/application/index.barrel";
import { InMemoryUserRepository } from "../../User/infrastructure/InMemoryUserRepository";

const UserRepository = new InMemoryUserRepository();

export const ServiceContainer = {
  user: {
    getAll: new UserGetAll(UserRepository),
    getOneById: new UserGetOneById(UserRepository),
    create: new UserCreate(UserRepository),
    edit: new UserEdit(UserRepository),
    delete: new UserDelete(UserRepository),
  },
};
