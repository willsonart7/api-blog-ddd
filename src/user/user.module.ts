import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserOrm } from './user.orm';
import { SendgridServise } from './utils/sendgrid.service';

@Module({
  controllers: [
    UserController
  ],
  providers: [
    UserService,
    UserOrm,
    SendgridServise
  ]
})
export class UserModule {}
