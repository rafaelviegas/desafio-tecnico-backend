import { Router, Request, Response, NextFunction } from 'express';
import AuthController  from "@controllers/authController";
const routes = Router();

routes.post('/login', (req: Request, res: Response, next: NextFunction) => 
    new AuthController().Login(req, res, next));
    
export default routes;