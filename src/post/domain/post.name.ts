import { StringValueObject } from "src/shared/domain/value_object/string.value.object";

export class PostName extends StringValueObject {
    private constructor(value: string) {
        super(value);
    }

    public static create(value: string): PostName {

        if (!value) {
            throw new Error("Post name is required");
        }

        return new PostName(value);
    }
}