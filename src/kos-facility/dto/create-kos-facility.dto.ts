import { IsInt, IsString } from 'class-validator'
import { Type } from 'class-transformer'

export class CreateKosFacilityDto {
  @Type(() => Number)
  @IsInt()
  kos_id!: number

  @IsString()
  facility!: string
}