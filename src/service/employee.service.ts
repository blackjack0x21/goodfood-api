import Employee from "../model/employee.model";
import { supabase } from "../utils/supabase";

export async function signUpEmployee(employee: Employee) {
  const { user, error } = await supabase.auth.signUp({ email: employee.email, password: employee.password })
  if(error) {
    console.log(error);
    return null;
  }
  else {
    return user;
  }
}

export async function createEmployee(employee: Employee, authToken: string) {
  // remove properties that don't exist in the employee table
  delete employee.email;
  delete employee.password;
  delete employee.password_confirmation;

  let result;

  // Set supabase request token to the user's 
  // this way we can check if he has the rights to execute this request
  supabase.auth.setAuth(authToken);

  const { data, error } = await supabase
  .from('employee')
  .insert([
    employee
  ])
  if(error) {
    console.log(error);
    result = null;
  }
  else {
    result = data;
  }

  // Once the request is done we log out the user's JWT
  supabase.auth.signOut();

  return result;
}