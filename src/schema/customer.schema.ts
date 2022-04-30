import { object, string, TypeOf } from "zod";

export const createCustomerSchema = object({
  body: object({
    id: string({
      required_error: "Id  is required",
    }),
    firstName: string({
      required_error: "First name is required",
    }),
    lastName: string({
      required_error: "Last name is required",
    })
  }),
});

export type CreateCustomerInput = TypeOf<typeof createCustomerSchema>["body"];