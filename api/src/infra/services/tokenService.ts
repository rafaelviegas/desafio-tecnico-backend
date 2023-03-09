require('dotenv').config();
import jwt from 'jsonwebtoken';

export default class TokenService {
    
    private _salt : string;

    constructor() {  

        this._salt = TokenService.GetSalt();
    }

    public async GenerateTokenAsync(username:string): Promise<string>{

        return jwt.sign({username}, this._salt, { expiresIn: 60*60*24 });
    }

    private static GetSalt(): string {
        const { SALT_KEY  } = process.env;
        
        if(!SALT_KEY)
            throw new Error("Parâmetro SALT_KEY não definidos no .env");

        return SALT_KEY || "";
    }
}