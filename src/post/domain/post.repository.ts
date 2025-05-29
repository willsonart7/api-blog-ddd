import { Post } from './post';
import { PostId } from './post.id';
import { PostName } from './post.name'; // Added import

export interface PostRepository {
    find(id: PostId): Promise<Post | null>;
    findByName(name: PostName): Promise<Post | null>; // Added method
    findAll(): Promise<Post[]>;
    save(post: Post): Promise<void>;
}
