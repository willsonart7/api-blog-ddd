import { Test } from '@nestjs/testing';
import { PostPostgresRepository } from 'src/post/infraestructure/repositories/post.postgres.repository';
import { SharedModule } from 'src/shared/shared.module';
import { PostCreateService } from './post.create.service';

describe('Post', () => {
    let postCreateService: PostCreateService;
    let postPostgresRepository: PostPostgresRepository;

    beforeEach(async () => {
        const moduleRef = await Test.createTestingModule({
            imports: [SharedModule],
            providers: [
                PostCreateService,
                {
                    provide: PostPostgresRepository,
                    useValue: {
                        save: () => {},
                    },
                },
            ],
        }).compile();
        postCreateService = moduleRef.get<PostCreateService>(PostCreateService);
        postPostgresRepository =
            moduleRef.get<PostPostgresRepository>(PostPostgresRepository);
    });

    describe('create', () => {
        it('should be save', async () => {
            const id = '41b8316f-5e68-4b2d-8699-f9189de55399';
            const name = 'Post test example';
            const description = 'Post test example description';

            jest.spyOn(postPostgresRepository, 'save').getMockImplementation();

            await postCreateService.execute(id, name, description);

            expect(postPostgresRepository.save).toBeCalled();
        });
    });
});
