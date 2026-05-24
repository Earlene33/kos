import { IsInt, IsString } from 'class-validator'
import { Type } from 'class-transformer'

export class CreateReviewDto {
  @Type(() => Number)
  @IsInt()
  kos_id!: number

  @Type(() => Number)
  @IsInt()
  user_id!: number

  @IsString()
  comment!: string
}