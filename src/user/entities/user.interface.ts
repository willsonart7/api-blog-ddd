
export abstract class User {

    protected id: string;
    protected email: string;
    protected status: "active" | "inactive";
    protected name: string;
    protected lastName: string;
    protected type: "student" | "teacher" | "admin";


    protected canEditUser: boolean;
    protected canCreateTest: boolean;

}