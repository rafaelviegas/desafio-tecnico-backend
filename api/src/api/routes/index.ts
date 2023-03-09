import { Router, Request, Response } from 'express';

const route = Router();

route.get('/', (req: Request, res: Response) => {
    res.status(200).send({
        title: "Kanban API",
        version: "1.0.0",
        env: process.env.NODE_ENV
    })
  })


export default route;


