import { IsBoolean, IsDate, IsNumber, IsOptional, IsString, IsUUID } from "class-validator";

export default class Customer {
  @IsUUID()
  id: string;
  @IsOptional()
  @IsDate()
  created_at?: string | null;
  @IsString()
  first_name: string;
  @IsString()
  last_name: string;
  @IsOptional()
  @IsString()
  selected_lang?: string | null;
  @IsOptional()
  @IsBoolean()
  is_active: boolean;
  @IsOptional()
  @IsNumber()
  delivery_address_id?: number | null;
  @IsOptional()
  @IsNumber()
  billing_address_id?: number | null;
 }