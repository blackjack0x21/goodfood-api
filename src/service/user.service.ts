import User  from "../model/user.model";
import { supabase } from "../utils/supabase";

// Partial veut dire que l'objet User n'a pas besoin d'être complet

// export function createUser(input: Partial<User>) {
//   return UserModel.create(input);
// }

export async function find() {
  const response = await supabase
  .from<User>('user') // Message maps to the type of the row in your database.
  .select('*')
  response.data // Response data will be of type Array<User>.
  return response.data[0];
}