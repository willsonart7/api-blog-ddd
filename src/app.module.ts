import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { MongoDbModule } from './shared/infraestructure/libs/mongodb/mongo.module';

import { SharedModule } from './shared/shared.module';
import { AppController } from './app.controller';

@Module({
    imports: [
        ConfigModule.forRoot({
            load: [configuration],
        }),
        MongoDbModule,
        SharedModule,
    ],
    controllers: [AppController],
    providers: [],
})
export class AppModule {}
