import { plainToClass } from "class-transformer";
import { validate } from "class-validator";
import { Request, Response } from "express";
import Customer from "../model/customer.model";
import { CreateCustomerInput } from "../schema/customer.schema";
import { createCustomer } from "../service/customer.service"

export async function createCustomerHandler(req: Request, res: Response){

    const body: CreateCustomerInput = req.body;
    
    const customer: Customer = { 
        id: body.id, 
        first_name: body.firstName, 
        last_name: body.lastName, 
        is_active: true
    }

    const customerTest: Customer = plainToClass(Customer, customer);
    try {
        validate(customerTest).then(async errors => {
          // errors is an array of validation errors
          if (errors.length > 0) {
            console.log('validation failed. errors: ', errors);
            return res.sendStatus(500);
          } else {
            console.log('validation succeed');
            const customerResponse: boolean = await createCustomer(customer);
            console.log(customerResponse);
            if(customerResponse === false) {
                return res.sendStatus(500);
            }

            else {
                return res.sendStatus(201);
            }
          }
        });
    }
    catch(e) {
        console.log(e);
        return res.sendStatus(500);
    }
}