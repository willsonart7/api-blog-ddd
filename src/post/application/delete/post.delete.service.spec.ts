import { Test } from '@nestjs/testing';
import { PostNotFoundError } from 'src/post/domain/post.notFound.error';
import { PostObjectMother } from 'src/post/domain/__mocks__/post.object.mother';
import { PostPostgresRepository } from 'src/post/infraestructure/repositories/post.postgres.repository';
import { SharedModule } from 'src/shared/shared.module';
import { PostFindService } from '../find/post.find.service';
import { PostDeleteService } from './post.delete.service';

describe('Post', () => {
    let postDeleteService: PostDeleteService;
    let postFindService: PostFindService;
    let postPostgresRepository: PostPostgresRepository;

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
                    provide: PostPostgresRepository,
                    useValue: {
                        save: () => {},
                    },
                },
            ],
        }).compile();
        postDeleteService = moduleRef.get<PostDeleteService>(PostDeleteService);
        postFindService = moduleRef.get<PostFindService>(PostFindService);
        postPostgresRepository =
            moduleRef.get<PostPostgresRepository>(PostPostgresRepository);
    });

    describe('delete', () => {
        it('should be deleted', async () => {
            const id = '41b8316f-5e68-4b2d-8699-f9189de55399';

            jest.spyOn(postPostgresRepository, 'save').getMockImplementation();

            jest.spyOn(postFindService, 'execute').mockImplementation(
                async () => {
                    return PostObjectMother.createRamdomActivePost(id);
                },
            );

            await postDeleteService.execute(id);

            expect(postPostgresRepository.save).toBeCalled();
        });

        it('should be PostNotFound', async () => {
            const id = '41b8316f-5e68-4b2d-8699-f9189de55399';

            jest.spyOn(postPostgresRepository, 'save').getMockImplementation();

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
