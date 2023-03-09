import { HttpStatusCode } from "./httpStatusCode";

export class BaseError extends Error {
    public readonly name: string;
    public readonly httpCode: HttpStatusCode;
    
    constructor(httpCode: HttpStatusCode, name: string, description: string) {
      super(description);
      Object.setPrototypeOf(this, new.target.prototype);
    
      this.name = name;
      this.httpCode = httpCode;    
      Error.captureStackTrace(this);
    }
   }