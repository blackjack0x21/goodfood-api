import { Request, Response } from "express";
import { createPizza } from "../service/pizza.service"

export async function createPizzaHandler(req: Request, res: Response){

    const body = req.body;

    const pizza = await createPizza(body);

    return res.send(pizza)
}