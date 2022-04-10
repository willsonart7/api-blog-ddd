import { Inject } from '@nestjs/common';
import { Db } from 'mongodb';
import { Post } from 'src/post/domain/post';
import { PostId } from 'src/post/domain/post.id';
import { MongoRepository } from 'src/post/domain/post.repository';

export class PostMongoRepository implements MongoRepository {
    constructor(@Inject('DATABASE_CONNECTION') private db: Db) {}

    private collectionName(): string {
        return 'posts';
    }

    async find(postId: PostId): Promise<Post | null> {
        const post = await this.db
            .collection(this.collectionName())
            .findOne({ id: postId.getValue() });
        if (!post) {
            return null;
        }
        return Post.toDomain(post);
    }

    async save(post: Post): Promise<void> {
        await this.db
            .collection(this.collectionName())
            .updateOne(
                { id: post.getId.getValue() },
                { $set: { ...post.toPersistence() } },
                { upsert: true },
            );
    }
}
