import { UniqueValueObject } from "src/shared/domain/value_object/unique.value.object";

export class PostId extends UniqueValueObject {
    private constructor(id?: string) {
        super(id);
    }

    public static create(value?: string): PostId {
        return new PostId(value);
    }
}