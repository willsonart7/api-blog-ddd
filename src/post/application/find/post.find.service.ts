import { PostId } from 'src/post/domain/post.id';
import { Post } from 'src/post/domain/post';
import { Inject, Injectable } from '@nestjs/common';
import { MongoRepository } from 'src/post/domain/post.repository';

@Injectable()
export class PostFindService {
    constructor(
        @Inject('PostMongoRepository')
        private readonly repository: MongoRepository,
    ) {}

    async execute(id: string): Promise<Post | null> {
        const postId = PostId.create(id);
        const result: Post | null = await this.repository.find(postId);
        return result;
    }
}
