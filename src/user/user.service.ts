import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UserOrm } from './utils/user.orm';
import { SendgridServise } from './utils/sendgrid.service';


@Injectable()
export class UserService {

  constructor(
    private readonly userOrm: UserOrm,
    private readonly sendgridService: SendgridServise
  ) { }

  async create(createUserDto: CreateUserDto) {

    const newUser = new User(createUserDto)
    await this.userOrm.save({
      id: newUser.id,
      email: newUser.email,
      name: newUser.name,
      lastName: newUser.lastName,
      type: newUser.type
    })

    await this.sendgridService.sendEmail(newUser)

    return {
      id: newUser.id,
      email: newUser.email,
      name: newUser.name,
      lastName: newUser.lastName,
      type: newUser.type
    }
  }

  async findAll() {
    return await this.userOrm.findAll()
  }

  async findOne(id: string) {
    return await this.userOrm.findOne(id)
  }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
