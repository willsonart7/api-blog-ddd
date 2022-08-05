import { Test, TestingModule } from '@nestjs/testing';
import { UserOrm } from './user.orm';
import { UserService } from './user.service';
import { SendgridServise } from './utils/sendgrid.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        UserOrm,
        SendgridServise
      ],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be create student', async () => {

    const requestUser = {
      id: "86c3c297-ae5d-49e7-a587-8818669e914a",
      name: "Willson",
      lastName: "Arteaga",
      email: "warteaga@kunturtech.com",
      type: "student" as "student"
    }

    const newUser = await service.create(requestUser)
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

    const newUser = await service.create(requestUser)
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

    const newUser = await service.create(requestUser)
    expect(newUser).toEqual(requestUser);
  });



  it('should return all users', async () => {
    const users = await service.findAll()
    expect(users).toEqual([]);
  });


});
