import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostRepository } from "src/post/domain/post.repository";
import { PostEntity } from "src/shared/infraestructure/libs/postgres/entities/post.entity";
import { Post } from "src/post/domain/post";
import { PostId } from "src/post/domain/post.id";

export class PostPostgresRepository implements PostRepository {

    constructor(
        @InjectRepository(PostEntity)
        private db: Repository<PostEntity>,
    ) { }

    async find(postId: PostId): Promise<Post | null> {
        const postRaw = await this.db.createQueryBuilder()
            .where("id = :id", { id: postId.getValue() })
            .getOne();

        if (!postRaw) {
            return null;
        }

        return Post.toDomain(postRaw);
    }

    async findAll(): Promise<Post[]> {
        const postsRaw = await this.db.createQueryBuilder()
        .where("status = :status", { status: "active" })
        .getMany()

        return postsRaw.map(postRaw => (Post.toDomain(postRaw)));
    }

    async save(post: Post): Promise<void> {

        const postRaw = await this.db.createQueryBuilder()
            .where("id = :id", { id: post.getId.getValue() })
            .getOne();

        if (postRaw) {
            this.db.createQueryBuilder()
                .update(PostEntity)
                .set({ ...post.toPersistence() })
                .where("id = :id", { id: post.getId.getValue() })
                .execute();
        } else {
            this.db.createQueryBuilder()
                .insert()
                .into(PostEntity)
                .values({ ...post.toPersistence() })
                .execute()
        }



    }

}