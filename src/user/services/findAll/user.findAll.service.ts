import { Injectable } from '@nestjs/common';
import { UserOrm } from '../../utils/user.orm';

@Injectable()
export class UserFindAllService {

    constructor(
        private readonly userOrm: UserOrm,
    ) { }

    async run() {
        return await this.userOrm.findAll()
    }

}
