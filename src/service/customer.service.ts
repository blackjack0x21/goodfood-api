import Customer from "../model/customer.model";
import { supabase } from "../utils/supabase";

// export function createCustomer(input: Partial<Customer>) {
//   return UserModel.create(input);
// }

export async function createCustomer(customer: Customer) {
  const { data, error } = await supabase
  .from('customer')
  .insert([
    { id: customer.id, first_name: customer.first_name, last_name: customer.last_name, is_active: true },
  ])
  if(error) {
    console.log(error);
    return false;
  }
  else {
    return true;
  }
}