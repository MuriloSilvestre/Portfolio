import { Router } from "express"
import { celebrate, Joi, Segments } from "celebrate"
import isAuthenticated from '@shared/http/middlewares/isAuthenticated'
import UserController from "../controllers/UserController"

const UserRouter= Router()
const UsersController = new UserController()


UserRouter.get('/', isAuthenticated, UsersController.index)

UserRouter.post('/',
celebrate({
  [Segments.BODY]:{
    Id: Joi.number().required(),
    UserName: Joi.string().required(),
    Email: Joi.string().required(),
    Password: Joi.string().required(),
    CreatedAT: Joi.string().required(),
    PersonId: Joi.number().required(),
    Person: {
      Id: Joi.number().required(),
      Name: Joi.string().required(),
      CorporateName: Joi.string().required(),
      FantasyName: Joi.string().required(),
      CnpjCpf: Joi.string().required(),
      Telephone: Joi.string().required(),
      NationalRegistry: Joi.string().required(),
      StateRegistry: Joi.string().required(),
      StartTime: Joi.string().required(),
      FinishTime: Joi.string().required(),
      TypePerson: Joi.string().required(),
      Partner: Joi.string().required(),
      CreatedAT: Joi.date().required(),
      AddressId: Joi.number().required(),
      Address:{
        Id: Joi.number().required(),
        Cep: Joi.string().required(),
        Logradouro: Joi.string().required(),
        Complemento: Joi.string().required(),
        Bairro: Joi.string().required(),
        Localidade: Joi.string().required(),
        Uf: Joi.string().required(),
        Pais: Joi.string().required(),
        Number: Joi.number().required(),
        CreatedAT: Joi.date().required(),
      },
    }
  },
}),
UsersController.create)

export default UserRouter
