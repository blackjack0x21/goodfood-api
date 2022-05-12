import { Request, Response } from "express";
import { createEmployee } from "../service/employee.service"

export async function createEmployeeHandler(req: Request, res: Response){

    const body = req.body;

    const employee = await createEmployee(body);

    return res.send(employee)
}