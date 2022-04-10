import { Post } from "./post";
import { PostId } from "./post.id";

export interface MongoRepository {
    find(id: PostId) : Promise<Post | null>;
    save(post: Post) : Promise<void>;
}