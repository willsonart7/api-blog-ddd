import {
    Controller,
    HttpException,
    HttpStatus,
    Get,
} from '@nestjs/common';
import { PostCreateService } from 'src/post/application/create/post.create.service';
import { PostSearchService } from 'src/post/application/search/post.search.service';


@Controller('post')
export class PostGetController {
    constructor(private postSearchService: PostSearchService) { }

    @Get('')
    async execute() {
        try {
            const posts = await this.postSearchService.execute();
            return new HttpException(posts.map(post => (post.toResponse())), HttpStatus.CREATED);
        } catch (error) {
            return new HttpException(error.message, HttpStatus.BAD_REQUEST);
        }
    }
}
