import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import AuthRoutes from '@routes/authRoutes';
import CardRoutes from '@routes/cardRoutes';
import Index from '@routes/index';
import User from "src/infra/data/models/user";
import Card from 'src/infra/data/models/card';
import Data from '@config/seed';
import { errorHandler } from '@infra/handlers/errors/errorHandler';
import { BaseError } from '@infra/handlers/errors/baseError';

const app = express();

app.use(bodyParser.json({
    limit: '2mb'
}));

app.use(bodyParser.urlencoded({extended:false}));

//Habilita o CORS
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});


//DB
Card.sync();
User.sync()
.then(()=> Data.seed());

//Carregar rotas
app.use('/', Index);
app.use(AuthRoutes);
app.use(CardRoutes);
app.use(async (err: BaseError, req: Request, res: Response, next: NextFunction) => {
    if (!errorHandler.isTrustedError(err)) {
      next(err);
    }
    
    await errorHandler.handleError(err, res);
    
});

app.listen(5000, () => 'server running on port 5000')