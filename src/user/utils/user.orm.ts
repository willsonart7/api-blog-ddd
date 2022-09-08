import { Injectable } from "@nestjs/common";

@Injectable()
export class UserOrm {

    private users = []

    public save(user: object) {
        this.users.push(user)
    }

    public findAll() {
        return this.users
    }

    public findOne(id: string){
        return this.users.find(user => (user.id == id))
    }


}