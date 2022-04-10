import { PostDescription } from 'src/post/domain/post.description';
import { PostId } from 'src/post/domain/post.id';
import { PostName } from 'src/post/domain/post.name';
import { Post } from 'src/post/domain/post';
import { Inject, Injectable } from '@nestjs/common';
import { PostRepository } from 'src/post/domain/post.repository';

@Injectable()
export class PostCreateService {
    constructor(
        @Inject('PostPostgresRepository')
        private readonly repository: PostRepository,
    ) {}

    async execute(
        id: string,
        name: string,
        description: string,
    ): Promise<void> {
        const postId = PostId.create(id);
        const postName = PostName.create(name);
        const postDescription = PostDescription.create(description);

        const post = Post.create(
            {
                name: postName,
                description: postDescription,
            },
            postId,
        );

        await this.repository.save(post);
    }
}
