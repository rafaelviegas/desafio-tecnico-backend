import { logger } from "@infra/logger/logger";
import { BaseError } from "./baseError";
import { Response } from 'express';

class ErrorHandler {
    public async handleError(error: BaseError, res: Response): Promise<void> {

       const status = error.httpCode as number;
    
        logger.error(error);

        res.status(status).send({success: false, message: error.message});
    }
    
    public isTrustedError(error: Error) {
      if (error instanceof BaseError) {
        return true;
      }
      return false;
    }
   }
export const errorHandler = new ErrorHandler();