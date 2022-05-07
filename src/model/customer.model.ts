import { IsBoolean, IsDate, IsEmail, IsNumber, IsOptional, IsString, IsUUID } from "class-validator";
import UserProfile from "./userProfile.model";

export default class Customer extends UserProfile {
  @IsOptional()
  @IsNumber()
  delivery_address_id?: number | null;
  @IsOptional()
  @IsNumber()
  billing_address_id?: number | null;
 }