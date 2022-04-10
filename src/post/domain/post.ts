import { AggregateRoot } from 'src/shared/domain/aggregate/aggregate.root';
import { PostDescription } from './post.description';
import { PostId } from './post.id';
import { PostName } from './post.name';

interface Props {
    name: PostName;
    description: PostDescription;
    status: 'active' | 'inactive';
    updatedAt: Date;
    createdAt: Date;
    deletedAt: Date;
}

interface CreateProps {
    name: PostName;
    description: PostDescription;
}

export class Post extends AggregateRoot<Props> {
    private constructor(props: Props, id: PostId) {
        super(props, id);
    }

    public static create(props: CreateProps, id: PostId): Post {
        const post = new Post(
            {
                ...props,
                status: 'active',
                updatedAt: new Date(),
                createdAt: new Date(),
                deletedAt: null,
            },
            id,
        );

        return post;
    }

    public static toDomain(raw: any): Post {
        const postId = PostId.create(raw.id);
        const postName = PostName.create(raw.name);
        const postDescription = PostDescription.create(raw.description);

        const post = new Post(
            {
                name: postName,
                description: postDescription,
                status: raw.status,
                updatedAt: raw.updatedAt,
                createdAt: raw.createdAt,
                deletedAt: raw.deletedAt,
            },
            postId,
        );

        return post;
    }

    public delete() {
        this.props.status = 'inactive';
        this.props.deletedAt = new Date();
    }

    public toPersistence() {
        return {
            id: this.getId.getValue(),
            status: this.props.status,
            name: this.props.name.getValue(),
            description: this.props.description.getValue(),
            updatedAt: this.props.updatedAt,
            createdAt: this.props.createdAt,
            deletedAt: this.props.deletedAt,
        };
    }

    public toResponse() {
        return {
            id: this.getId.getValue(),
            name: this.props.name.getValue(),
            status: this.props.status,
            description: this.props.description.getValue(),
            updatedAt: this.props.updatedAt,
            createdAt: this.props.createdAt,
            deletedAt: this.props.deletedAt,
        };
    }
}
