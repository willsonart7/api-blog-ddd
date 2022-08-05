import { Injectable } from "@nestjs/common";

@Injectable()
export class UserOrm {

    private users = []

    public save(user: object) {
        this.users.push(user)
    }

}