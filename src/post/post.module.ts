import { Module } from '@nestjs/common';
import { PostCreateService } from './application/create/post.create.service';
import { PostDeleteService } from './application/delete/post.delete.service';
import { PostFindService } from './application/find/post.find.service';
import { PostSearchService } from './application/search/post.search.service';
import { PostDeleteController } from './infraestructure/controllers/post.delete.controller';
import { PostGetController } from './infraestructure/controllers/post.get.controller';
import { PostPutController } from './infraestructure/controllers/post.put.controller';
import { PostMongoRepository } from './infraestructure/repositories/post.mongodb.repository';

@Module({
    imports: [],
    controllers: [
        PostPutController,
        PostDeleteController,
        PostGetController
    ],
    providers: [
        PostMongoRepository,
        PostCreateService,
        PostFindService,
        PostDeleteService,
        PostSearchService
    ],
})
export class PostModule {}
