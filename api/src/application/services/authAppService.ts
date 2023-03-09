import LoginRequest from "@app/models/loginRequest";
import Token from "src/application/models/token";
import  UserRepository from "@infra/data/repositories/userRepository";
import { NextFunction, Request, Response } from "express";
import TokenService from "src/infra/services/tokenService";
import jwt from 'jsonwebtoken';
import HTTP401Error from "@infra/handlers/errors/http401Error";

 export default class AuthService {
    
    private _userRepository;
    private _tokenService;
    constructor() {
        //TODO: Usar injeção de dependência
        this._userRepository = new UserRepository();
        this._tokenService = new TokenService();
    }
    
    public async Authenticate(req: LoginRequest) : Promise<string> {

        const isValidUserAndPassword = await this._userRepository.CheckPasswordAsync(req.login, req.senha);

        if(isValidUserAndPassword)
            return await this._tokenService.GenerateTokenAsync(req.login);
                
        throw new HTTP401Error("Usuário ou seja inválidos.");

    }

    public async Authorize(req :Request, res: Response, next: NextFunction) : Promise<void>{

        try {

            const { SALT_KEY  } = process.env;
            const token = req.headers.authorization;
    
            if(!token)
                throw new HTTP401Error("Acesso restrito.")
    
            jwt.verify(token.replace(/^Bearer\s/, ''), SALT_KEY || "", (error, decoded )=> {
    
                if(error)
                    throw new HTTP401Error("Token Inválido.");
                    
                next();
            });   

        } catch (error) {

            next(error);
        }
    }
}