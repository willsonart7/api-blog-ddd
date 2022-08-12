import { User } from "./user.interface";


export class UserAdmin extends User {

    public id: string;
    public email: string;
    public status: "active" | "inactive";
    public name: string;
    public lastName: string;
    public type: "admin";
    public canEditUser: boolean;
    public canCreateTest: boolean;

    public static create(id: string, email: string, name: string, lastName: string): UserAdmin {
        const defaultStatus = "active";
        const canCreateTest = true;
        const canEditUser = true;
        const newUserAdmin = new UserAdmin(id, email, name, lastName, defaultStatus, canCreateTest, canEditUser)
        return newUserAdmin
    }


    constructor(id: string, email: string, name: string, lastName: string, status: "active" | "inactive", canCreateTest: boolean, canCreateUser: boolean) {
        super()
        this.id = id
        this.email = email
        this.name = name
        this.lastName = lastName
        this.status = status
        this.type = this.type
        this.canCreateTest = canCreateTest
    }

}