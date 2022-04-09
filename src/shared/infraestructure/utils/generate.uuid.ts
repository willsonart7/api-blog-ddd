import { v4 as uuidv4 } from 'uuid';

export class GenerateUuid {
    public static new() {
        return uuidv4();
    }
}
