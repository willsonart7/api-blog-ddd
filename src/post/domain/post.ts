import { AggregateRoot } from "src/shared/domain/aggregate/aggregate.root";
import { PostDescription } from "./post.description";
import { PostId } from "./post.id";
import { PostName } from "./post.name";

interface Props {
    name: PostName;
    description: PostDescription;
}

export class Post extends AggregateRoot<Props> {


    private constructor(props: Props, id: PostId) {
        super(props, id)
    }

    public static create(props: Props, id: PostId, ): Post {

        const post = new Post({
            ...props,
        }, id)

        return post
    }

    public static toDomain(raw: any): Post {

        const postId = PostId.create(raw.id)
        const postName = PostName.create(raw.name)
        const postDescription = PostName.create(raw.name)

        const post = new Post({
            name: postName,
            description: postDescription
        }, postId)

        return post
    }

    public toPersistence() {
        return {
            id: this.getId.getValue(),
            name: this.props.name.getValue(),
            description: this.props.description.getValue(),
        }
    }

    public toResponse() {
        return {
            id: this.getId.getValue(),
            name: this.props.name.getValue(),
            description: this.props.description.getValue(),
        }
    }

}