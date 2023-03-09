import { Router, Request, Response } from 'express';

const router = Router();

const route = router.get('/', (req: Request, res: Response) => {
    res.status(200).send({
        title: "Kanban API",
        version: "1.0.0",
        env: process.env.NODE_ENV
    })
  })


module.exports = router;


