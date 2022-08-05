import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserOrm } from './user.orm';
import { UserService } from './user.service';
import { SendgridServise } from './utils/sendgrid.service';

describe('UserController', () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        UserService,
        UserOrm,
        SendgridServise
      ],
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
