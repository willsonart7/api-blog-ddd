import { Post } from "./post";

export interface MongoRepository {
    save(post: Post) : Promise<void>;
}