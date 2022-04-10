import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostEntity } from 'src/shared/infraestructure/libs/postgres/entities/post.entity';
import { PostCreateService } from './application/create/post.create.service';
import { PostDeleteService } from './application/delete/post.delete.service';
import { PostFindService } from './application/find/post.find.service';
import { PostSearchService } from './application/search/post.search.service';
import { PostDeleteController } from './infraestructure/controllers/post.delete.controller';
import { PostGetController } from './infraestructure/controllers/post.get.controller';
import { PostPutController } from './infraestructure/controllers/post.put.controller';
import { PostMongoRepository } from './infraestructure/repositories/post.mongodb.repository';
import { PostPostgresRepository } from './infraestructure/repositories/post.postgres.repository';

@Module({
    imports: [
        TypeOrmModule.forFeature([PostEntity])
    ],
    controllers: [
        PostPutController,
        PostDeleteController,
        PostGetController
    ],
    providers: [
        PostMongoRepository,
        PostPostgresRepository,
        PostCreateService,
        PostFindService,
        PostDeleteService,
        PostSearchService
    ],
})
export class PostModule {}
