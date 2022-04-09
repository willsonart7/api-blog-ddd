import { GenerateUuid } from 'src/shared/infraestructure/utils/generate.uuid';

export class UniqueValueObject {
    private value: string;

    constructor(id?: string) {
        this.value = id ? id : GenerateUuid.new();
    }

    public equals(other: UniqueValueObject): boolean {
        return this.value === other.getValue();
    }

    public getValue() {
        return this.value;
    }
}
