import { Module } from '@nestjs/common';
import { PostCreateService } from './application/create/post.create.service';
import { PostDeleteService } from './application/delete/post.delete.service';
import { PostFindService } from './application/find/post.find.service';
import { PostDeleteController } from './infraestructure/controllers/post.delete.controller';
import { PostPutController } from './infraestructure/controllers/post.put.controller';
import { PostMongoRepository } from './infraestructure/repositories/post.mongodb.repository';

@Module({
    imports: [],
    controllers: [
        PostPutController,
        PostDeleteController
    ],
    providers: [
        PostMongoRepository,
        PostCreateService,
        PostFindService,
        PostDeleteService
    ],
})
export class PostModule {}
