import { Response, Request } from 'express';
import CreateUserService from '../service/CreateUserService';
import ListUserService from '../service/ListUserService';

export default class UserController{
  public async index(request: Request, response: Response): Promise<Response>{
    const ListUser = new ListUserService()

    const funcionarios = await ListUser.execute()

    return response.json(funcionarios)
  }

  public async create(request: Request, response: Response): Promise<Response>{
    const {
      UserName,
      Email,
      Password,
      CreatedAT,
      PersonId,
      Person,
    } = request.body

    const  CreateUser = new CreateUserService()

    const funcionario = await CreateUser.execute({
      UserName,
      Email,
      Password,
      CreatedAT,
      PersonId,
      Person,
    })

    return response.json(funcionario)
  }

}
