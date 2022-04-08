"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPizza = void 0;
const supabase_1 = require("../utils/supabase");
// export function createPizza(input: Partial<Pizza>) {
//   return UserModel.create(input);
// }
function createPizza(body) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield supabase_1.supabase
            .from('messages') // Message maps to the type of the row in your database.
            .select('*, author:user_id(username)')
            .match({ channel_id: 2 }); // Your IDE will be able to help with auto-completion.
        response.data; // Response data will be of type Array<Message>.
        return response;
    });
}
exports.createPizza = createPizza;
