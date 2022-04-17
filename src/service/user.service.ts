import User  from "../model/user.model";
import log from "../utils/logger";
import { supabase } from "../utils/supabase";

// Partial veut dire que l'objet User n'a pas besoin d'être complet

// export function createUser(input: Partial<User>) {
//   return UserModel.create(input);
// }

export async function find() {
  const { data, error } = await supabase
  .from<User>('user') // Message maps to the type of the row in your database.
  .select('*')
  data // Response data will be of type Array<User>.
  try {
    return data[0];
  }
  catch {
    log.error(error);
  }
}