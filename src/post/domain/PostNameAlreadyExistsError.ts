import { DomainError } from '../../shared/domain/domain.error';

export class PostNameAlreadyExistsError extends DomainError {
    constructor(name: string) {
        super(`Post with name '${name}' already exists.`);
    }
}
