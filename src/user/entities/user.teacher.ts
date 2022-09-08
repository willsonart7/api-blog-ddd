import { User } from "./user.interface";

export class UserTeacher extends User {

    public id: string;
    public email: string;
    public status: "active" | "inactive";
    public name: string;
    public lastName: string;
    public type: "teacher";
    public canEditUser: boolean;
    public canCreateTest: boolean;

    public static create(id: string, email: string, name: string, lastName: string): UserTeacher {
        const defaultStatus = "active";
        const canCreateTest = true;
        const canEditUser = false;
        const newUserTeacher = new UserTeacher(id, email, name, lastName, defaultStatus, "teacher", canCreateTest, canEditUser)
        return newUserTeacher
    }

    constructor(id: string, email: string, name: string, lastName: string, status: "active" | "inactive", type: "teacher", canCreateTest: boolean, canEditUser: boolean) {
        super()
        this.id = id
        this.email = email
        this.name = name
        this.lastName = lastName
        this.status = status
        this.type = type
        this.canCreateTest = canCreateTest
        this.canEditUser = canEditUser
    }
}