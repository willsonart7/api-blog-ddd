import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../../dto/create-user.dto';
import { UserOrm } from '../../utils/user.orm';
import { SendgridServise } from '../../utils/sendgrid.service';
import { UserFactory } from 'src/user/entities/user.factory';


@Injectable()
export class UserCreateService {

    constructor(
        private readonly userOrm: UserOrm,
        private readonly sendgridService: SendgridServise
    ) { }

    async run(createUserDto: CreateUserDto) {

        const newUser = UserFactory.create(createUserDto.id, createUserDto.email, createUserDto.name, createUserDto.lastName, createUserDto.type)

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
