import { Post } from "src/post/domain/post";

export class PostObjectMother {

    public static createRamdomActivePost(postIdRaw?: string): Post {

        const calibrate = Post.toDomain({
            id: postIdRaw,
            name: "Post name",
            description: "Post description"
        })

        return calibrate
    }

}