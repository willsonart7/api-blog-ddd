// import bcrypt from 'bcrypt'
const bcrypt = require('bcrypt');

export class Encript {
    public static hash(plainText: string): string {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(plainText, salt);
        return hash;
    }

    public static compare(plainText: string, hash: string): boolean {
        return bcrypt.compareSync(plainText, hash);
    }
}
