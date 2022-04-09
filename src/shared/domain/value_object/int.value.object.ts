export class IntValueObject {
    protected value: number;

    constructor(value: number) {
        this.value = value;
    }

    public getValue() {
        return this.value;
    }

    public isBiggerThan(other: IntValueObject): boolean {
        return this.value > other.getValue();
    }

    public toString(): string {
        return this.value.toString();
    }
}
