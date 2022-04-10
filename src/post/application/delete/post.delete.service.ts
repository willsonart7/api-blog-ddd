import { Inject, Injectable } from "@nestjs/common"
import { MongoRepository } from "src/post/domain/post.repository"
import { PostFindService } from "../find/post.find.service"

@Injectable()
export class PostDeleteService {
    constructor(
        @Inject('PostMongoRepository') private readonly repository: MongoRepository,
        private readonly postFindService: PostFindService
    ) { }

    async execute(id: string): Promise<void> {

        const post = await this.postFindService.execute(id)
        if (!post) {
            throw new Error("Post not found")
        }

        post.delete()
        await this.repository.save(post)
    }
}