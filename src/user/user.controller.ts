import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserCreateService } from './services/create/user.create.service';
import { UserFindAllService } from './services/findAll/user.findAll.service';
import { UserFindOneService } from './services/findOne/user.findOne.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly userCreateService: UserCreateService,
    private readonly userFindAllService: UserFindAllService,
    private readonly userFindOneService: UserFindOneService
  ) { }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userCreateService.run(createUserDto);
  }

  @Get()
  findAll() {
    return this.userFindAllService.run();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userFindOneService.run(id);
  }

}
