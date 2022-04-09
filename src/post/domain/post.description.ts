import { StringValueObject } from "src/shared/domain/value_object/string.value.object";

export class PostDescription extends StringValueObject {
    private constructor(value: string) {
        super(value);
    }

    public static create(value: string): PostDescription {
        return new PostDescription(value);
    }
}