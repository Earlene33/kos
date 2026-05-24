import { IsInt, IsDateString } from 'class-validator'
import { Type } from 'class-transformer'

export class CreateBookingDto {
  @Type(() => Number)
  @IsInt()
  kos_id!: number

  @Type(() => Number)
  @IsInt()
  user_id!: number

  @IsDateString()
  start_date!: string

  @IsDateString()
  end_date!: string
}