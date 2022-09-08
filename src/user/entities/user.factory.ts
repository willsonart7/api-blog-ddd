import { UserAdmin } from "./user.admin";
import { UserStudent } from "./user.student";
import { UserTeacher } from "./user.teacher";

const MappedTypeUsers = {
    admin: UserAdmin,
    teacher: UserTeacher,
    student: UserStudent,
} as const


type UserTypes = UserAdmin | UserStudent | UserTeacher;

export class UserFactory {

    public static create(id: string, email: string, name: string, lastName: string, type: keyof typeof MappedTypeUsers): UserTypes {
        switch (type) {
            case 'admin':
                return UserAdmin.create(id, email, name, lastName)
                break;
            case 'teacher':
                return UserTeacher.create(id, email, name, lastName)
                break;
            case 'student':
                return UserStudent.create(id, email, name, lastName)
                break;
            default:
                this.assertNever(type)
                break;
        }
    }

    private static assertNever(value: never) {}
}