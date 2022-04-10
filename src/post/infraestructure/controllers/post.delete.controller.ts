import {
    Controller,
    HttpException,
    HttpStatus,
    Param,
    ParseUUIDPipe,
    Delete,
} from '@nestjs/common';
import { PostDeleteService } from 'src/post/application/delete/post.delete.service';

@Controller('post')
export class PostDeleteController {
    constructor(private postDeleteService: PostDeleteService) {}

    @Delete('/:id')
    async execute(
        @Param('id', ParseUUIDPipe) id: string,
    ) {
        try {
            await this.postDeleteService.execute(id);
            return new HttpException({}, HttpStatus.OK);
        } catch (error) {
            return new HttpException(error.message, HttpStatus.BAD_REQUEST);
        }
    }
}
