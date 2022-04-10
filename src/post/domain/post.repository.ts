import { Post } from './post';
import { PostId } from './post.id';

export interface PostRepository {
    find(id: PostId): Promise<Post | null>;
    findAll(): Promise<Post[]>;
    save(post: Post): Promise<void>;
}
