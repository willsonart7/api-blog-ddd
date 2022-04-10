import { Inject, Injectable } from '@nestjs/common';
import { Post } from 'src/post/domain/post';
import { MongoRepository } from 'src/post/domain/post.repository';

@Injectable()
export class PostSearchService {
    constructor(
        @Inject('PostMongoRepository') private readonly repository: MongoRepository,
    ) {}

    async execute(): Promise<Post[]> {
        return await this.repository.findAll();
    }
}
