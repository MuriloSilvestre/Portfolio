import { Repository, EntityRepository } from "typeorm"
import User from "@modules/user/typeorm/entities/User"

@EntityRepository(User)
export class UserRepositorio extends Repository<User>{
  public async findByUserName(UserName: string): Promise<User | undefined>{
    const User = this.findOne({
      where: {
        UserName,
      },
    })
    return User
  }

  public async findById(UserId: number): Promise<User | undefined>{
    const User = this.findOne({
      where: {
        UserId,
      },
    })
    return User
  }

  public async findByEmail(Email: string): Promise<User | undefined>{
    const User = this.findOne({
      where: {
        Email,
      },
    })
    return User
  }

  public async findByToken(Token: string): Promise<User | undefined>{
    const TokenUser = await this.findOne({
      where: {
        Token,
      },
    })
    return TokenUser
  }

  public async generete(Id: number, Token: string): Promise<User>{
    const TokenUser = await this.create({
      Id,
      Token,
    })
    await this.save(TokenUser)

    return TokenUser
  }
}

export default UserRepositorio
