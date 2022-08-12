import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from '../../dto/create-user.dto';
import { UserOrm } from '../../utils/user.orm';
import { UserAdmin } from 'src/user/entities/user.admin';
import { EmailServiceInterface } from 'src/user/utils/email.service.interface';

@Injectable()
export class UserCreateService {

    constructor(
        private readonly userOrm: UserOrm,
        @Inject('MailChimpService') private readonly emailService: EmailServiceInterface
        
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

        await this.emailService.sendEmail(newUser.email, newUser.name)

        return {
            id: newUser.id,
            email: newUser.email,
            name: newUser.name,
            lastName: newUser.lastName,
            type: newUser.type
        }
    }
}
