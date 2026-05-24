import { IsInt, IsString } from 'class-validator'

export class CreateKosDto {
  @IsInt()
  user_id!: number

  @IsString()
  name!: string

  @IsString()
  address!: string

  @IsInt()
  price_per_month!: number

  @IsString()
  gender!: string
}