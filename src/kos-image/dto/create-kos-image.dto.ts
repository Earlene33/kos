import { IsInt, IsString } from 'class-validator'

export class CreateKosImageDto {
  @IsInt()
  kos_id!: number

  @IsString()
  file!: string
}