import { NextFunction, Response } from "express";
import IRequest from "src/application/interfaces/models/irequest";
import AuthService from "src/application/services/authAppService";    
import LoginRequest from "@app/models/loginRequest";

export default class AuthController {

    private _authservice: AuthService;

    constructor() {
        //TODO: Usar injeção de dependência
        this._authservice = new AuthService();

    }
    public async Login(req: IRequest<LoginRequest>, res: Response, next: NextFunction) {

        try {

            await this._authservice
            .Authenticate(req.body)
            .then((token)=> res.status(201).json(token));

        } catch (error) {

            next(error);
        }           
    }
}
