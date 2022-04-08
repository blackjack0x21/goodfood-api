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
exports.find = void 0;
const supabase_1 = require("../utils/supabase");
// Partial veut dire que l'objet User n'a pas besoin d'être complet
// export function createUser(input: Partial<User>) {
//   return UserModel.create(input);
// }
function find() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield supabase_1.supabase
            .from('user') // Message maps to the type of the row in your database.
            .select('*');
        response.data; // Response data will be of type Array<User>.
        return response.data[0];
    });
}
exports.find = find;
