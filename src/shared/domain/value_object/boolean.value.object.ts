export class BooleanValueObject {
    protected value: boolean;

    constructor(value: boolean) {
        this.value = value;
    }

    public getValue() {
        return this.value;
    }
}
