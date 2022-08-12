import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { User } from '../entities/user.entity';
import { UserOrm } from '../utils/user.orm';
import { SendgridServise } from '../utils/sendgrid.service';


@Injectable()
export class UserCreateService {

    constructor(
        private readonly userOrm: UserOrm,
        private readonly sendgridService: SendgridServise
    ) { }

    async run(createUserDto: CreateUserDto) {

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
}
