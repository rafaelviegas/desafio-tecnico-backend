import { Request, Response, NextFunction } from "express";
import { logger } from "@infra/logger/logger";

class Audit {

    public async Log(req :Request, res: Response, next: NextFunction) : Promise<void>{

        try {

            if(Audit.changeState(req.method))
                logger.trace(`Cartão ${req.params?.id} - ${req.body?.titulo} - ${Audit.getAction(req.method)}`)

            next();

        } catch (error) {

            next(error);
        }
    }

    private static changeState(method:string): boolean {
        return method === 'PUT' || method === 'DELETE'; 
    }

    private static getAction(method:string):string {

        switch (method) {

            case 'PUT':
                return "Alterar";        

            case 'DELETE':
                return "Remover"                                         

            case 'POST':
                return "Criar"         

            case 'GET':
                return "Consultar"                                      

            default:
                return "Consultar"; 
        }
    }
}

export const audit = new Audit();