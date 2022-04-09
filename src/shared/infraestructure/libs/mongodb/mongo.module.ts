import { Module, Global } from '@nestjs/common';
import { MongoClient, Db } from 'mongodb';

@Global()
@Module({
    providers: [
        {
            provide: 'DATABASE_CONNECTION',
            useFactory: async (): Promise<Db> => {
                try {
                    let uri: string;
                    uri = process.env.DATABASE_URI;

                    const client = await MongoClient.connect(uri);

                    return client.db(process.env.DB_NAME);
                } catch (e) {
                    console.log('Error en la conexion de BD', e);
                    throw `Error db connect ${e}`;
                }
            },
        },
    ],
    exports: ['DATABASE_CONNECTION'],
})
export class MongoDbModule {}
