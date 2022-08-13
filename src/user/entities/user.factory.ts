import { UserAdmin } from "./user.admin";
import { UserStudent } from "./user.student";
import { UserTeacher } from "./user.teacher";

export class UserFactory {


    public static create(id: string, email: string, name: string, lastName: string, type: "admin" | "teacher" | "student"): UserStudent | UserAdmin | UserTeacher {

        let user;
        
        switch (type) {
            case 'admin':
                user = UserAdmin.create(id, email, name, lastName)
                break;
            case 'teacher':
                user = UserTeacher.create(id, email, name, lastName)
                break;
            case 'student':
                user = UserStudent.create(id, email, name, lastName)
                break;
        }

        return user
    }

}