import Customer from "../model/customer.model";
import { supabase } from "../utils/supabase";

// export function createCustomer(input: Partial<Customer>) {
//   return UserModel.create(input);
// }

export async function signUpCustomer(customer: Customer) {
  const { user, error } = await supabase.auth.signUp({ email: customer.email, password: customer.password })
  if(error) {
    console.log(error);
    return null;
  }
  else {
    return user;
  }
}

export async function createCustomer(customer: Customer) {
  // remove properties that don't exist in the customer table
  delete customer.email;
  delete customer.password;
  delete customer.password_confirmation;

  const { data, error } = await supabase
  .from('customer')
  .insert([
    customer
  ])
  if(error) {
    console.log(error);
    return null;
  }
  else {
    return data;
  }
}