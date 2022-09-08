import { User } from "./user.interface";

export class UserStudent extends User {

    public id: string;
    public email: string;
    public status: "active" | "inactive";
    public name: string;
    public lastName: string;
    public type: "student";
    public canEditUser: boolean;
    public canCreateTest: boolean;

    public static create(id: string, email: string, name: string, lastName: string): UserStudent {
        const defaultStatus = "active";
        const canCreateTest = false;
        const canEditUser = false;
        const newUserStudent = new UserStudent(id, email, name, lastName, defaultStatus, "student", canCreateTest, canEditUser)
        return newUserStudent
    }

    constructor(id: string, email: string, name: string, lastName: string, status: "active" | "inactive", type: "student", canCreateTest: boolean, canEditUser: boolean) {
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