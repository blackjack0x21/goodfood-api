import { object, string, number, TypeOf } from "zod";

export const createEmployeeSchema = object({
  body: object({
    authToken: string({
      required_error: "Auth token is required",
    }),
    firstName: string({
      required_error: "First name is required",
    }),
    lastName: string({
      required_error: "Last name is required",
    }),
    email: string({
      required_error: "Email is required",
    }).email("Not a valid email"),
    accountType: number({
      required_error: "Account type is required",
    }),
  }),
});

export const getEmployeeSchema = object({
  body: object({
    authToken: string({
      required_error: "Auth token is required",
    }),
    userId: string({
      required_error: "User UUID is required",
    }),
  }),
});

export type CreateEmployeeInput = TypeOf<typeof createEmployeeSchema>["body"];
export type GetEmployeeInput = TypeOf<typeof getEmployeeSchema>["body"];