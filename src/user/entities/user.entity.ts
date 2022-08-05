
type UserPropsCreate = {
    id: string;
    email: string;
    name: string;
    lastName: string;
    type: "student" | "teacher" | "admin";
}

export class User {

    public id: string;
    public email: string;
    public status: "active" | "inactive";
    public name: string;
    public lastName: string;
    public type: "student" | "teacher" | "admin";


    public canEditUser: boolean;
    public canCreateTest: boolean;


    constructor(userProps: UserPropsCreate) {
        this.id = userProps.id
        this.email = userProps.email
        this.status = "active"
        this.name = userProps.name
        this.lastName = userProps.lastName
        this.type = userProps.type

        if (this.type == "teacher") {
            this.canCreateTest = true
            this.canEditUser = false

        } else if (this.type == "admin") {
            this.canCreateTest = true
            this.canEditUser = false

        } else {
            this.canCreateTest = false
            this.canEditUser = false
        }


    }

}
