// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { PostRepository } from "src/post/domain/post.repository";
// import { PostEntity } from "src/shared/infraestructure/libs/postgres/entities/post.entity";
import { Post } from "src/post/domain/post";
import { PostId } from "src/post/domain/post.id";

export class PostPostgresRepository {

    private posts = [
        {
            id: "dafcdd08-723d-4f9e-9bee-4aa676b7e2fa",
            name: "Prueba post 1",
            description: "Descripcion del post",
            status: 'active',
            updatedAt: new Date(),
            createdAt: new Date(),
            deletedAt: new Date(),
        },
        {
            id: "3e642750-8617-4bc8-83d0-0868c8e5004c",
            name: "Prueba post 2",
            description: "",
            status: 'active',
            updatedAt: new Date(),
            createdAt: new Date(),
            deletedAt: new Date(),
        },
        {
            id: "4faade40-ca77-47a1-81b6-5d1effd8d1e6",
            name: "Prueba post 3",
            description: "",
            status: 'active',
            updatedAt: new Date(),
            createdAt: new Date(),
            deletedAt: new Date(),
        }
    ]

    constructor(
    ) { }

    async find(postId: PostId): Promise<Post | null> {

        const postRaw = this.posts.find(postRaw => (postRaw.id == postId.getValue()))
        return Post.toDomain(postRaw);
    }

    async findAll(): Promise<Post[]> {
        return this.posts.map(postRaw => (Post.toDomain(postRaw)));
    }

    async save(post: Post): Promise<void> {

        const newPosts = []

        for (let postRaw of this.posts) {
            if (postRaw.id == post.getId.getValue()) {
                postRaw = post.toPersistence()
                break;
            }

            newPosts.push(postRaw)
        }
    }

}