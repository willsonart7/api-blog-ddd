import { Test } from '@nestjs/testing';
import { PostPostgresRepository } from 'src/post/infraestructure/repositories/post.postgres.repository';
import { SharedModule } from 'src/shared/shared.module';
import { PostCreateService } from './post.create.service';
import { PostIdAlreadyExistsError } from 'src/post/domain/PostIdAlreadyExistsError'; // Added
import { PostNameAlreadyExistsError } from 'src/post/domain/PostNameAlreadyExistsError'; // Added
import { Post } from 'src/post/domain/post'; // Added
import { PostId } from 'src/post/domain/post.id'; // Added
import { PostName } from 'src/post/domain/post.name'; // Added
import { PostDescription } from 'src/post/domain/post.description'; // Added

// Mock Post entity for repository returns
const mockPost = Post.create(
    {
        name: PostName.create('Existing Name'),
        description: PostDescription.create('Existing Description'),
    },
    PostId.create('existing-id-123'),
);

describe('PostCreateService', () => { // Changed describe name for clarity
    let postCreateService: PostCreateService;
    let repositoryMock: jest.Mocked<PostPostgresRepository>; // Use jest.Mocked for better type safety

    beforeEach(async () => {
        // Create a Jest mock object for PostPostgresRepository
        const repositoryMockValue = {
            save: jest.fn(),
            find: jest.fn(),
            findByName: jest.fn(),
            findAll: jest.fn(), // Ensure all methods of PostRepository are mocked if PostPostgresRepository is used directly
        };

        const moduleRef = await Test.createTestingModule({
            imports: [SharedModule], // SharedModule might not be necessary if all dependencies are mocked
            providers: [
                PostCreateService,
                {
                    provide: 'PostPostgresRepository', // Use the injection token string
                    useValue: repositoryMockValue,
                },
            ],
        }).compile();
        postCreateService = moduleRef.get<PostCreateService>(PostCreateService);
        repositoryMock = moduleRef.get('PostPostgresRepository');
    });

    describe('execute', () => { // Changed describe name for clarity
        const id = '41b8316f-5e68-4b2d-8699-f9189de55399';
        const name = 'Post test example';
        const description = 'Post test example description';

        it('should save a post when id and name do not exist', async () => {
            repositoryMock.find.mockResolvedValue(null);
            repositoryMock.findByName.mockResolvedValue(null);
            repositoryMock.save.mockResolvedValue(undefined); // Explicitly mock save behavior

            await postCreateService.execute(id, name, description);

            expect(repositoryMock.save).toHaveBeenCalled();
        });

        it('should throw PostIdAlreadyExistsError if post ID already exists', async () => {
            repositoryMock.find.mockResolvedValue(mockPost); // Mock find to return an existing post

            await expect(
                postCreateService.execute(mockPost.getId.getValue(), name, description),
            ).rejects.toThrow(PostIdAlreadyExistsError);

            expect(repositoryMock.save).not.toHaveBeenCalled();
        });

        it('should throw PostNameAlreadyExistsError if post name already exists', async () => {
            repositoryMock.find.mockResolvedValue(null); // ID doesn't exist
            repositoryMock.findByName.mockResolvedValue(mockPost); // Mock findByName to return an existing post

            await expect(
                postCreateService.execute(id, mockPost.props.name.getValue(), description),
            ).rejects.toThrow(PostNameAlreadyExistsError);

            expect(repositoryMock.save).not.toHaveBeenCalled();
        });
    });
});
