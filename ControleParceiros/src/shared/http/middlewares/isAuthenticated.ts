import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'
import AppError from '@shared/errors/AppError'
import  authConfig  from '@config/auth'

interface IToKenPayLoad{
  iat: number
  exp: number
  sub: string
}

export default function isAuthenticated( request: Request, response: Response, next: NextFunction): void{
  const authHeader = request.headers.authorization

  if(!authHeader){
    throw new AppError('Esta faltando o Token.')
  }

  const [, token] = authHeader.split(' ')

  try{
    const deCodedToken = verify(token, authConfig.jwt.secret)

    const { sub } = deCodedToken as IToKenPayLoad

    request.cliente = {
      id: sub
    }

    return next()
  }
  catch{
    throw new AppError('token Invalido')
  }
}
