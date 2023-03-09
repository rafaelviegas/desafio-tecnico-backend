import { BaseError } from "./baseError";
import { HttpStatusCode } from "./httpStatusCode";

export default class HTTP401Error extends BaseError {
    constructor(description = 'not found') {
      super(HttpStatusCode.UNAUTHORIZED, 'UNAUTHORIZED', description);
      Object.setPrototypeOf(this, new.target.prototype);
    }
}