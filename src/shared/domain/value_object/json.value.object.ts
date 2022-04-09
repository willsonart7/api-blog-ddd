export class JsonValueObject {
    protected value: string;

    constructor(value: object) {
        this.value = JSON.stringify(value);
    }

    public getValue() {
        return JSON.parse(this.value);
    }

    public toString() {
        return this.value;
    }
}
