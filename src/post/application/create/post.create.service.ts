import { PostDescription } from 'src/post/domain/post.description';
import { PostId } from 'src/post/domain/post.id';
import { PostName } from 'src/post/domain/post.name';
import { Post } from 'src/post/domain/post';
import { Inject, Injectable } from '@nestjs/common';
import { PostRepository } from 'src/post/domain/post.repository';
import { PostIdAlreadyExistsError } from 'src/post/domain/PostIdAlreadyExistsError'; // Added import
import { PostNameAlreadyExistsError } from 'src/post/domain/PostNameAlreadyExistsError'; // Added import

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

        // Validation for existing ID
        const existingPostById = await this.repository.find(postId);
        if (existingPostById) {
            throw new PostIdAlreadyExistsError(id);
        }

        // Validation for existing name
        const existingPostByName = await this.repository.findByName(postName);
        if (existingPostByName) {
            throw new PostNameAlreadyExistsError(name);
        }

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
