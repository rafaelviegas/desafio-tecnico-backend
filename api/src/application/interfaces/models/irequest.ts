import { Request } from 'express';

export default interface IRequest<T> extends Request   {
    body: T
}