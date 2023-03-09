require('dotenv').config();
import User from "@infra/data/models/user";

const { DEFAULT_LOGIN, DEFAULT_PASSWORD } = process.env;

export default class Data {

    public static seed(): void {
        (async () => {
            
            if(DEFAULT_LOGIN && DEFAULT_PASSWORD)
                await User.findOrCreate({where: { username: DEFAULT_LOGIN, password: DEFAULT_PASSWORD }})
            else
                throw new Error("Parâmetros DEFAULT_LOGIN e DEFAULT_PASSWORD não definidos no .env")
        })();       
    }
}