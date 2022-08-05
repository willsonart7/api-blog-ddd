import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { MongoDbModule } from './shared/infraestructure/libs/mongodb/mongo.module';

import { SharedModule } from './shared/shared.module';
import { AppController } from './app.controller';
import { PostModule } from './post/post.module';
import { PostgresModule } from './shared/infraestructure/libs/postgres/postgres.module';
import { UserModule } from './user/user.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            load: [configuration],
        }),
        // PostgresModule,
        // MongoDbModule,
        SharedModule,
        PostModule,
        UserModule,
    ],
    controllers: [AppController],
    providers: [],
})
export class AppModule {}
