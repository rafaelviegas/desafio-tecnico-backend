import { Request, Response, NextFunction } from "express";
import IRequest from "src/application/interfaces/models/irequest";
import CardService from "@app/services/cardAppService";    
import AddCardRequest from "@app/models/addCardRequest";
import UpdateCardRequest from "@app/models/updateCardRequest";

export default class AuthController {

    private _cardservice: CardService;

    constructor() {
        //TODO: Usar injeção de dependência
        this._cardservice = new CardService();
    }

    public async GetCardsAsync(res: Response, next: NextFunction) {
        
        try {

            await this._cardservice.GetCardsAsync()
                .then((cards)=> res.status(200).send(cards))
                .catch((error)=>res.status(400).send(error.message));

        } catch (error) {

            next(error);
        }           
    }

    public async AddCardAsync(req: IRequest<AddCardRequest>, res: Response, next: NextFunction) {

        try {

            await this._cardservice
                .AddCardAsync(req.body)
                .then((card)=> res.status(201).send(card));

            } catch (error) {
    
                next(error);
            }           
        }

    public async UpdateCardAsync(req: IRequest<UpdateCardRequest>, res: Response, next: NextFunction) {

        try {

            await this._cardservice
                .UpdateCardAsync(req.params.id, req.body)
                .then((updatedCard)=> {
                    res.status(200).send(updatedCard)
                });

        } catch (error) {

            next(error);
        }
    }

    public async DeleteCardAsync(req: Request, res: Response, next: NextFunction) {
        try {

            await this._cardservice
            .DeleteCardsAsync(req.params.id)
            .then((cards)=> res.status(200).send(cards));

        } catch (error) {
  
            next(error);
        }
    }
}
