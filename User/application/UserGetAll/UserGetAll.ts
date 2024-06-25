import { User, UserRepository } from "../../domain/index.barrel";

export class UserGetAll{
    constructor(private repository:UserRepository){}
    async run():Promise<User[]>{
        return this.repository.getAll()
    }
}