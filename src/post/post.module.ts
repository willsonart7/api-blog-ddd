import { Module } from "@nestjs/common";
import { PostCreateService } from "./application/create/post.create.service";
import { PostPutController } from "./infraestructure/controllers/post.put.controller";
import { PostMongoRepository } from "./infraestructure/repositories/post.mongodb.repository";

@Module({
    imports: [],
    controllers: [PostPutController],
    providers: [
        PostMongoRepository,
        PostCreateService
    ],
})
export class PostModule {}