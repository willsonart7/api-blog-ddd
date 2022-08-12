import { Test, TestingModule } from '@nestjs/testing';
import { UserOrm } from '../../utils/user.orm';

import { SendgridServise } from '../../utils/sendgrid.service';
import { UserCreateService } from './user.create.service';

describe('UserCreateService', () => {
  let service: UserCreateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserCreateService,
        UserOrm,
        SendgridServise
      ],
    }).compile();

    service = module.get<UserCreateService>(UserCreateService);
  });

  it('should be create student', async () => {

    const requestUser = {
      id: "86c3c297-ae5d-49e7-a587-8818669e914a",
      name: "Willson",
      lastName: "Arteaga",
      email: "warteaga@kunturtech.com",
      type: "student" as "student"
    }

    const newUser = await service.run(requestUser)
    expect(newUser).toEqual(requestUser);
  });

  it('should be create admin', async () => {

    const requestUser = {
      id: "86c3c297-ae5d-49e7-a587-8818669e914a",
      name: "Willson",
      lastName: "Arteaga",
      email: "warteaga@kunturtech.com",
      type: "admin" as "admin"
    }

    const newUser = await service.run(requestUser)
    expect(newUser).toEqual(requestUser);
  });


  it('should be create teacher', async () => {

    const requestUser = {
      id: "86c3c297-ae5d-49e7-a587-8818669e914a",
      name: "Willson",
      lastName: "Arteaga",
      email: "warteaga@kunturtech.com",
      type: "teacher" as "teacher"
    }

    const newUser = await service.run(requestUser)
    expect(newUser).toEqual(requestUser);
  });


});