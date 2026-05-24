import { Role } from '@prisma/client'
import { IsEmail, IsString, MinLength, IsEnum } from 'class-validator'

export class CreateUserDto {
  @IsString()
  name!: string

  @IsEmail()
  email!: string

  @MinLength(6)
  password!: string

  @IsString()
  phone!: string

  @IsEnum(Role)
  role!: Role
}