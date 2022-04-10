import { Inject, Injectable } from '@nestjs/common';
import { Post } from 'src/post/domain/post';
import { PostRepository } from 'src/post/domain/post.repository';

@Injectable()
export class PostSearchService {
    constructor(
        @Inject('PostPostgresRepository') private readonly repository: PostRepository,
    ) {}

    async execute(): Promise<Post[]> {
        return await this.repository.findAll();
    }
}
