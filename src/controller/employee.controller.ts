import { User } from "@supabase/supabase-js";
import { Request, Response } from "express";
import { createEmployee,signUpEmployee } from "../service/employee.service"
import { CreateEmployeeInput } from "../schema/employee.schema";
import Employee from "../model/employee.model";
import validateModel from "../middleware/validateModel";
import { isJWT } from "class-validator";
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