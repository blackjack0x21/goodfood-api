import Employee from "../model/employee.model";
import { supabase } from "../utils/supabase";

// export function createEmployee(input: Partial<Employee>) {
//   return UserModel.create(input);
// }

export async function createEmployee(body:any) {
  const response = await supabase
  .from<Employee>('employee') // Message maps to the type of the row in your database.
  .select('*')
response.data // Response data will be of type Array<Message>.
  return response;
}