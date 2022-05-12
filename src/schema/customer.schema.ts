import { object, string, TypeOf } from "zod";

export const createCustomerSchema = object({
  body: object({
    firstName: string({
      required_error: "First name is required",
    }),
    lastName: string({
      required_error: "Last name is required",
    }),
    password: string({
      required_error: "Password is required",
    }),
    passwordConfirmation: string({
      required_error: "Password confirmation is required",
    }),
    email: string({
      required_error: "Email is required",
    })
  }),
});

export type CreateCustomerInput = TypeOf<typeof createCustomerSchema>["body"];