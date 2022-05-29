import { User } from "@supabase/supabase-js";
import { Request, Response } from "express";
import { createEmployee, signUpEmployee, getAccountType, getEmployeesAsAdmin } from "../service/employee.service"
import { CreateEmployeeInput, GetEmployeeInput } from "../schema/employee.schema";
import Employee from "../model/employee.model";
import validateModel from "../middleware/validateModel";
import { isJWT, isUUID } from "class-validator";
var generator = require('generate-password');

export async function createEmployeeHandler(req: Request, res: Response){

    const body: CreateEmployeeInput = req.body;

    // Generate new user password
    var password = generator.generate({
        length: 20,
        numbers: true
    });

    // New Employee instance
    const employee = new Employee();
    employee.first_name = body.firstName;
    employee.last_name = body.lastName;
    employee.is_active = true;
    employee.email = body.email;
    employee.account_type_id = body.accountType
    employee.password = password;

    // Check the user model
    if(await validateModel(employee) && isJWT(body.authToken)) {
        // Create user in auth.users and get returned user to retreive its ID
        const supabaseUser: User = await signUpEmployee(employee);
    
        // If returned user is null, it means it already exists
        if(!supabaseUser) {
          return res.status(409).send("User already exists");
        }
    
        employee.id = supabaseUser.id;
    
        // If returned user is null, it means it already exists
        const createdEmployee = await createEmployee(employee, body.authToken);
        // If returned user is null, it means it already exists
        if(!createdEmployee) {
          return res.status(409).send("Employee already exists");
        }
    
        // User has been created
        return res.sendStatus(201);
    }
    
    return res.status(400).send("User's data is invalid");

}

export async function getEmployeeHandler(req: Request, res: Response){

  const body: GetEmployeeInput = req.body;

  // Check if the JWT and the UUID are valid
  if(isJWT(body.authToken) && isUUID(body.userId)) {
      // Get the user's account type
      const accountType: number | any = await getAccountType(body.authToken, body.userId);
  
      // If user's account type === 1 return everything except cashiers (their are managed internally by the restaurant's manager)
      if(accountType === 1) {
        const employees: Employee[] = await getEmployeesAsAdmin(body.authToken, body.userId);
        if(employees == null) {
          return res.status(500).send("An error has occured");
        }
        else {
          return res.status(200).send(employees);
        }
      }
      
      // If the user's account type === 2 return only cashiers (it's the only thing they can manage)
      if(accountType === 2) {
        const employees: Employee[] = await getEmployeesAsAdmin(body.authToken, body.userId);
        if(employees == null) {
          return res.status(500).send("An error has occured");
        }
        else {
          return res.status(200).send(employees);
        }
      }
  }
  
  // Else bad request
  return res.status(400).send("User's data is invalid");
}