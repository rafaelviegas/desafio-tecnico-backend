import User from "src/infra/data/models/user";

export default interface IUserRepository {
    CheckPasswordAsync(username: string, password: string) : Promise<boolean>;
}