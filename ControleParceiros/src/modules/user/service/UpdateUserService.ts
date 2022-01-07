import { UserRepositorio } from './../typeorm/repositories/UserRepository';
import User from '@modules/user/typeorm/entities/User';
import Person from '@modules/person/typeorm/entities/Person';
import AppError from "@shared/errors/AppError";
import { hash, compare } from "bcryptjs";
import { getCustomRepository, Timestamp } from "typeorm";

interface IRequest{
  Id: number

  UserName: string

  Email: string

  Password: string

  PasswordOld: string

  UpdateAT: Timestamp

  PersonId: number

  Person: Person
}

class UpdatePerfilService{
  public async execute({
      Id,
      UserName,
      Email,
      Password,
      PasswordOld,
      UpdateAT,
      PersonId,
  }:IRequest): Promise<User>{
    const UsersRepositorio = getCustomRepository(UserRepositorio)

    const User = await UsersRepositorio.findById(Id)

    if (!User){
      throw new AppError('User não encontrado')
    }

    const emailExiste = await UsersRepositorio.findByEmail(Email)

    if (emailExiste && emailExiste.Id !== Id){
      throw new AppError('Este e-mail já utilizado na aplicação')
    }

    if (Password && !PasswordOld){
      throw new AppError('você precisa informar sua antiga senha')
    }

    if (Password && PasswordOld){
      const verificaSenha = await compare(PasswordOld, User.Password)
      if (!verificaSenha){
        throw new AppError('Sua senha atual não é essa')
      }

      User.Password = await hash(Password, 8)

    }

    User.Id = Id
    User.UserName = UserName
    User.Email = Email
    User.Password = Password
    User.UpdateAT = UpdateAT
    User.PersonId = PersonId

    await UsersRepositorio.save(User)

    return User
  }
}

export default UpdatePerfilService
