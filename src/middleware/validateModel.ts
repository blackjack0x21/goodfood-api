import { validate } from "class-validator";
import log from "../utils/logger";

export default async function validateModel(classToValidate: any): Promise<boolean> {
    try {
        const errors = await validate(classToValidate);
        if (errors.length) {
            log.error('validation failed. errors: ');
            console.log(errors);
            return Promise.resolve(false);
        } else {
            log.info('validation succeeded');
            return Promise.resolve(true);
        }
    }
    catch(e) {
        log.error(e);
        return Promise.resolve(false);
    }
};