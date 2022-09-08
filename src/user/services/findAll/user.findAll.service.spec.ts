import { Test, TestingModule } from '@nestjs/testing';
import { UserOrm } from '../../utils/user.orm';
import { UserFindAllService } from './user.findAll.service';

describe('UserFindAllService', () => {
  let service: UserFindAllService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserFindAllService,
        UserOrm,
      ],
    }).compile();

    service = module.get<UserFindAllService>(UserFindAllService);
  });


  it('should return all users', async () => {
    const users = await service.run()
    expect(users).toEqual([]);
  });


});
