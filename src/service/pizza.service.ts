import { Pizza } from "../model/pizza.model";
import { supabase } from "../utils/supabase";

// export function createPizza(input: Partial<Pizza>) {
//   return UserModel.create(input);
// }

export async function createPizza(body:any) {
  const response = await supabase
  .from<Pizza>('messages') // Message maps to the type of the row in your database.
  .select('*, author:user_id(username)')
  .match({ channel_id: 2 }) // Your IDE will be able to help with auto-completion.
response.data // Response data will be of type Array<Message>.
  return response;
}