import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../../dto/create-user.dto';
import { User } from '../../entities/user.entity';
import { UserOrm } from '../../utils/user.orm';
import { SendgridServise } from '../../utils/sendgrid.service';
import { UserAdmin } from 'src/user/entities/user.admin';


@Injectable()
export class UserCreateService {

    constructor(
        private readonly userOrm: UserOrm,
        private readonly sendgridService: SendgridServise
    ) { }

    async run(createUserDto: CreateUserDto) {

        let newUser

        switch(createUserDto.type) {
            case 'admin': 
                 newUser = UserAdmin.create(createUserDto.id, createUserDto.email, createUserDto.name, createUserDto.lastName)
            break;
            case 'teacher':
                //
            break;
            case 'student':
                //
            break;
        }

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
