import { Inject, Injectable } from '@nestjs/common';
import { PostNotFoundError } from 'src/post/domain/post.notFound.error';
import { MongoRepository } from 'src/post/domain/post.repository';
import { PostFindService } from '../find/post.find.service';

@Injectable()
export class PostDeleteService {
    constructor(
        @Inject('PostMongoRepository')
        private readonly repository: MongoRepository,
        private readonly postFindService: PostFindService,
    ) {}

    async execute(id: string): Promise<void | PostNotFoundError> {
        const post = await this.postFindService.execute(id);
        if (!post) {
            throw new PostNotFoundError(id);
        }

        post.delete();
        await this.repository.save(post);
    }
}
