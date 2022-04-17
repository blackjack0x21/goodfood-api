import { IsBoolean, IsEmail, IsString } from "class-validator";

export default class User {
  @IsEmail()
  email: string;
  @IsString()
  firstName: string;
  @IsString()
  lastName: string;
  @IsString()
  password: string;
  @IsString()
  verificationCode: string | null;
  @IsString()
  passwordResetCode: string | null;
  @IsBoolean()
  verified: boolean;
 }