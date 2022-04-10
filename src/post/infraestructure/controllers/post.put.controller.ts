import {
    Controller,
    HttpException,
    HttpStatus,
    UseGuards,
    Param,
    Body,
    ParseUUIDPipe,
    Put,
} from '@nestjs/common';
import { PostCreateService } from 'src/post/application/create/post.create.service';
import { PostCreateDto } from '../dtos/post.create.dto';

@Controller('post')
export class PostPutController {
    constructor(private postCreateService: PostCreateService) {}

    @Put('/:id')
    async execute(
        @Param('id', ParseUUIDPipe) id: string,
        @Body() postCreateDto: PostCreateDto,
    ) {
        try {
            await this.postCreateService.execute(
                id,
                postCreateDto.name,
                postCreateDto.description,
            );
            return new HttpException({}, HttpStatus.CREATED);
        } catch (error) {
            return new HttpException(error.message, HttpStatus.BAD_REQUEST);
        }
    }
}
