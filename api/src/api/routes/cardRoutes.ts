import { Router, Request, Response, NextFunction } from 'express';
import CardController  from "@controllers/cardController";
import AuthService from '@app/services/authAppService';
import { audit } from "@api/middlewares/audit";

const routes = Router();

routes.post('/cards', new AuthService().Authorize, (req: Request, res: Response, next: NextFunction) => 
    new CardController().AddCardAsync(req, res, next));

routes.get('/cards', new AuthService().Authorize, (req: Request, res: Response, next: NextFunction) => 
    new CardController().GetCardsAsync(res, next));    

routes.put('/cards/:id', new AuthService().Authorize, audit.Log, (req: Request, res: Response, next: NextFunction) => 
    new CardController().UpdateCardAsync(req, res, next));     

routes.delete('/cards/:id', new AuthService().Authorize, audit.Log, (req: Request, res: Response, next: NextFunction) => 
    new CardController().DeleteCardAsync(req, res, next));            
    
export default routes;