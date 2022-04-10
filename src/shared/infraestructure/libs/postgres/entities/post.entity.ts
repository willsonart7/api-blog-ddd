import {Entity, PrimaryColumn ,Column} from "typeorm";

@Entity({ name: 'posts' })
export class PostEntity {

    @PrimaryColumn("uuid")
    id: string;

    @Column()
    name : string

    @Column()
    description : string

    @Column()
    status: string

    @Column()
    updatedAt: Date

    @Column()
    createdAt: Date

    @Column()
    deletedAt: Date

}