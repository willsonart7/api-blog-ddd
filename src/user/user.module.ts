import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserOrm } from './utils/user.orm';
import { SendgridServise } from './utils/sendgrid.service';
import { UserFindAllService } from './services/findAll/user.findAll.service';
import { UserFindOneService } from './services/findOne/user.findOne.service';
import { UserCreateService } from './services/create/user.create.service';


@Module({
  controllers: [
    UserController
  ],
  providers: [
    UserFindAllService,
    UserFindOneService,
    UserCreateService,
    UserOrm,
    SendgridServise
  ]
})
export class UserModule {}
