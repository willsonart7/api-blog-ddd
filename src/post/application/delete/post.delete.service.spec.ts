import { Test } from '@nestjs/testing';
import { PostNotFoundError } from 'src/post/domain/post.notFound.error';
import { PostObjectMother } from 'src/post/domain/__mocks__/post.object.mother';
import { PostMongoRepository } from 'src/post/infraestructure/repositories/post.mongodb.repository';
import { SharedModule } from 'src/shared/shared.module';
import { PostFindService } from '../find/post.find.service';
import { PostDeleteService } from './post.delete.service';

describe('Post', () => {
    let postDeleteService: PostDeleteService;
    let postFindService: PostFindService;
    let postMongoRepository: PostMongoRepository;

    beforeEach(async () => {
        const moduleRef = await Test.createTestingModule({
            imports: [SharedModule],
            providers: [
                PostDeleteService,
                {
                    provide: PostFindService,
                    useValue: {
                        execute: () => {},
                    },
                },
                {
                    provide: PostMongoRepository,
                    useValue: {
                        save: () => {},
                    },
                },
            ],
        }).compile();
        postDeleteService = moduleRef.get<PostDeleteService>(PostDeleteService);
        postFindService = moduleRef.get<PostFindService>(PostFindService);
        postMongoRepository =
            moduleRef.get<PostMongoRepository>(PostMongoRepository);
    });

    describe('delete', () => {
        it('should be deleted', async () => {
            const id = '41b8316f-5e68-4b2d-8699-f9189de55399';

            jest.spyOn(postMongoRepository, 'save').getMockImplementation();

            jest.spyOn(postFindService, 'execute').mockImplementation(
                async () => {
                    return PostObjectMother.createRamdomActivePost(id);
                },
            );

            await postDeleteService.execute(id);

            expect(postMongoRepository.save).toBeCalled();
        });

        it('should be PostNotFound', async () => {
            const id = '41b8316f-5e68-4b2d-8699-f9189de55399';

            jest.spyOn(postMongoRepository, 'save').getMockImplementation();

            jest.spyOn(postFindService, 'execute').mockImplementation(
                async () => {
                    return null;
                },
            );

            try {
                await postDeleteService.execute(id);
                expect(true).toBe(false);
            } catch (error) {
                expect(error).toBeInstanceOf(PostNotFoundError);
            }
        });
    });
});
