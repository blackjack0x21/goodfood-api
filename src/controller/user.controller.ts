import { PostgrestError } from "@supabase/supabase-js";
import { plainToClass } from 'class-transformer';
import { Request, Response } from "express";
import User from "../model/user.model";
import {
  CreateUserInput,
  ForgotPasswordInput,
  ResetPasswordInput,
  VerifyUserInput,
} from "../schema/user.schema";
import { find } from "../service/user.service";
// import {
//   createUser,
//   findUserByEmail,
//   findUserById,
// } from "../service/user.service";
import { validate } from "class-validator";

export async function createUserHandler(
  req: Request<{}, {}, CreateUserInput>,
  res: Response
) {
  const body = req.body;

  try {
    // const user = await createUser(body);

    // await sendEmail({
    //   to: user.email,
    //   from: "test@example.com",
    //   subject: "Verify your email",
    //   text: `verification code: ${user.verificationCode}. Id: ${user._id}`,
    // });

    return res.send("User successfully created");
  } catch (e: any) {
    if (e.code === 11000) {
      return res.status(409).send("Account already exists");
    }

    return res.status(500).send(e);
  }
}

export async function verifyUserHandler(
  req: Request<VerifyUserInput>,
  res: Response
) {
  const id = req.params.id;
  const verificationCode = req.params.verificationCode;

  // find the user
  const userResponse: User | PostgrestError = await find();
  const user: User = plainToClass(User, userResponse);
  try {
    validate(user).then(errors => {
      // errors is an array of validation errors
      if (errors.length > 0) {
        console.log('validation failed. errors: ', errors);
        throw new Error();
      } else {
        console.log('validation succeed');
      }
    });
  }
  catch {
    console.log("Error Occured");
  }

  if (!userResponse) {
    return res.send("Could not verify user");
  }

  // check to see if they are already verified
  if (userResponse.verified) {
    return res.send(userResponse);
  }

  // check to see if the verificationCode matches
  // if (user.verificationCode === verificationCode) {
  //   user.verified = true;

  //   await user.save();

  //   return res.send("User successfully verified");
  // }

  return res.send("Could not verify user");
}