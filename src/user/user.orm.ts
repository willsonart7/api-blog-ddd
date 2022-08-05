import { Injectable } from "@nestjs/common";
import { User } from "./entities/user.entity";

@Injectable()
export class UserOrm {

    private users = []

    public save(user: User) {
        this.users.push(user)
    }

}