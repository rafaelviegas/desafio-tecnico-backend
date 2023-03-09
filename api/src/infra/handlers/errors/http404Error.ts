import { BaseError } from "./baseError";
import { HttpStatusCode } from "./httpStatusCode";

export default class HTTP404Error extends BaseError {
    constructor(description = 'not found') {
      super(HttpStatusCode.NOT_FOUND, 'NOT FOUND', description);
      Object.setPrototypeOf(this, new.target.prototype);
    }
}