export class CreateUserDto {
    id: string;
    email: string;
    name: string;
    lastName: string;
    type: "student" | "teacher" | "admin";
}
