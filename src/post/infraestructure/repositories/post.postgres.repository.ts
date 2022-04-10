import { Connection } from "typeorm";
import { PostRepository } from "src/post/domain/post.repository";
import { PostEntity } from "src/shared/infraestructure/libs/postgres/entities/post.entity";
import { Post } from "src/post/domain/post";
import { PostId } from "src/post/domain/post.id";

export class PostPostgresRepository implements PostRepository {

    constructor(
        private db: Connection,
    ) { }

    async find(postId: PostId): Promise<Post | null> {
        const postsRaw = await this.db.getRepository(PostEntity)
            .createQueryBuilder()
            .where("id = :id", { id: postId.getValue() })
            .getOne();

        if (!postsRaw) {
            return null;
        }

        return Post.toDomain(postsRaw);
    }

    async findAll(): Promise<Post[]> {
        const postsRaw = await this.db.getRepository(PostEntity)
            .createQueryBuilder()
            .getMany();

        return postsRaw.map(postRaw => (Post.toDomain(postRaw)));
    }

    async save(post: Post): Promise<void> {

        const postsRaw = await this.db.getRepository(PostEntity)
            .createQueryBuilder()
            .where("id = :id", { id: post.getId.getValue() })
            .getOne();

        if (postsRaw) {
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