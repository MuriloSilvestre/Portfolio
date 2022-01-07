import { UserRepositorio } from './../typeorm/repositories/UserRepository';
import User from '@modules/user/typeorm/entities/User';
import Person from '@modules/person/typeorm/entities/Person';
import AppError from '@shared/errors/AppError';
import { hash } from 'bcryptjs';
import { getCustomRepository } from "typeorm";

interface IRequest{

  UserName: string

  Email: string

  Password: string

  CreatedAT: Date

  PersonId: number

  Person: Person
}

class CreateUserService{
    public async execute({
        UserName,
        Email,
        Password,
        CreatedAT,
        PersonId,
        Person,
        }: IRequest): Promise<User>{
        const UsersRepositorio = getCustomRepository(UserRepositorio)

        const UserEmailExiste = await UsersRepositorio.findByEmail(Email)

        const UserUserNameExiste = await UsersRepositorio.findByUserName(Email)

        if(UserUserNameExiste){
            throw new AppError('Ja existe um Usuario com esse endereço de E-mail.')
        }

        if(UserEmailExiste){
            throw new AppError('Ja existe um Usuario com esse Nome de Usuario.')
        }

        const hashedSenha = await hash(Password, 8)

        const funcionario = UsersRepositorio.create({
          UserName,
          Email,
          Password: hashedSenha,
          CreatedAT,
          PersonId,
          Person,
        })

        await UsersRepositorio.save(funcionario)

        return funcionario
    }
}

export default CreateUserService
