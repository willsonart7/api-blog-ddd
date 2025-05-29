import { DomainError } from '../../shared/domain/domain.error';

export class PostIdAlreadyExistsError extends DomainError {
    constructor(id: string) {
        super(`Post with id '${id}' already exists.`);
    }
}
