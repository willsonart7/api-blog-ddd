export class PostNotFoundError extends Error {
    constructor(id: string) {
        super(`Post with id ${id} not found`);
    }
}
