import { Injectable } from '@nestjs/common';
import { UserOrm } from '../../utils/user.orm';

@Injectable()
export class UserFindOneService {

    constructor(
        private readonly userOrm: UserOrm,
    ) { }

    async run(id: string) {
        return await this.userOrm.findOne(id)
    }
}
