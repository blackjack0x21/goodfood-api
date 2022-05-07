import { IsBoolean, IsDate, IsDateString, IsEmail, IsMilitaryTime, IsNumber, IsOptional, IsString, IsUUID } from "class-validator";

export default class UserProfile {
  @IsOptional()
  @IsUUID()
  id?: string;
  @IsOptional()
  @IsDateString()
  created_at?: string | null;
  @IsString()
  first_name: string;
  @IsString()
  last_name: string;
  @IsOptional()
  @IsString()
  password?: string;
  @IsOptional()
  @IsString()
  password_confirmation?: string;
  @IsOptional()
  @IsEmail()
  email?: string;
  @IsOptional()
  @IsString()
  selected_lang?: string | null;
  @IsOptional()
  @IsBoolean()
  is_active?: boolean;
  
  passwordsMatch?(): boolean {
    return this.password === this.password_confirmation;
  }
 }