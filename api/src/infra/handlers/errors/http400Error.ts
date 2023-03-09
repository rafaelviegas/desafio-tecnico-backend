import { BaseError } from "./baseError";
import { HttpStatusCode } from "./httpStatusCode";

export default class HTTP400Error extends BaseError {
    constructor(description = 'bad request') {
      super(HttpStatusCode.BAD_REQUEST, 'BAD REQUEST', description);
    }
}