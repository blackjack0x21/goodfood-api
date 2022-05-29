import { IsNumber, IsOptional, IsString } from "class-validator";
import UserProfile from "./userProfile.model";

export default class Employee extends UserProfile {
  @IsOptional()
  @IsString()
  avatar_url?: string | null;
  @IsNumber()
  account_type_id: number;
  @IsOptional()
  @IsNumber()
  restaurant_id?: number;
 }