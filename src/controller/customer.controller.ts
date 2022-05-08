import { User } from "@supabase/supabase-js";
import { Request, Response } from "express";
import validateModel from "../middleware/validateModel";
import Customer from "../model/customer.model";
import { CreateCustomerInput } from "../schema/customer.schema";
import { createCustomer, signUpCustomer } from "../service/customer.service"
import zxcvbn from 'zxcvbn';

export async function createCustomerHandler(req: Request, res: Response){

  const body: CreateCustomerInput = req.body;
  
  // New Customer instance
  const customer = new Customer();
  customer.first_name = body.firstName;
  customer.last_name = body.lastName;
  customer.is_active = true;
  customer.password = body.password;
  customer.password_confirmation = body.passwordConfirmation;
  customer.email = body.email;
  
  // Check the user model
  // if(!IsEmail(customer.email)) {
  //   return res.status(400).send("Email needs to be valid");
  // }

  if(await validateModel(customer)) {
    // Check if passwords match
    if(!customer.passwordsMatch()) {
      return res.status(400).send("Passwords do not match");
    }

    const passwordStrength = zxcvbn(customer.password).score;
    if(passwordStrength < 2) {
      return res.status(400).send("Password is too weak");
    }

    // Create user in auth.users and get returned user to retreive its ID
    const supabaseUser: User = await signUpCustomer(customer);

    // If returned user is null, it means it already exists
    if(!supabaseUser) {
      return res.status(409).send("User already exists");
    }

    customer.id = supabaseUser.id;

    // If returned user is null, it means it already exists
    const createdCustomer = await createCustomer(customer);
    // If returned user is null, it means it already exists
    if(!createdCustomer) {
      return res.status(409).send("User already exists");
    }

    // User has been created
    return res.sendStatus(201);
  }

  return res.status(400).send("User's data is invalid");
}