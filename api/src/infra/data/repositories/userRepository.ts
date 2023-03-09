import IUserRepository from "@domain/interfaces/repositories/iuserRepository";
import User from "@infra/data/models/user";

export default class UserRepository implements IUserRepository {

    async CheckPasswordAsync(username: string, password: string): Promise<boolean> {

        return await User
            .findOne({where: { username, password }})
            .then(user => user !== null)
    }
}