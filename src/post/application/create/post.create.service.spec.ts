import { Test } from '@nestjs/testing';
import { PostMongoRepository } from 'src/post/infraestructure/repositories/post.mongodb.repository';
import { SharedModule } from 'src/shared/shared.module';
import { PostCreateService } from './post.create.service';

describe('Post', () => {

    let postCreateService: PostCreateService;
    let postMongoRepository: PostMongoRepository;

    beforeEach(async () => {
        const moduleRef = await Test.createTestingModule({
            imports: [
                SharedModule
            ],
            providers: [
                PostCreateService,
                {
                    provide: PostMongoRepository,
                    useValue: {
                        save: () => { }
                    },
                },

            ],
        }).compile();
        postCreateService = moduleRef.get<PostCreateService>(PostCreateService);
        postMongoRepository = moduleRef.get<PostMongoRepository>(PostMongoRepository);
    });

    describe('create', () => {

        it('should be save', async () => {

            const id = '41b8316f-5e68-4b2d-8699-f9189de55399';
            const name = 'Post test example';
            const description = 'Post test example description';

            jest.spyOn(postMongoRepository, 'save').getMockImplementation()

            await postCreateService.execute(id, name, description);

            expect(postMongoRepository.save).toBeCalled()
        });

    })


})