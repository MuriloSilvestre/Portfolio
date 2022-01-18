import { UserRepositorio } from './../typeorm/repositories/UserRepository';
import User from '@modules/user/typeorm/entities/User';
import { getCustomRepository } from "typeorm";

class ListUserService{
    public async execute(): Promise<User[]>{
        const UsersRepositorio = getCustomRepository(UserRepositorio)

        const Users = UsersRepositorio.find()

        return Users
    }
}

export default ListUserService
