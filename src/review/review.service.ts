import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { CreateReviewDto } from './dto/create-review.dto'

@Injectable()
export class ReviewService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateReviewDto) {
    return this.prisma.review.create({
      data: {
        comment: dto.comment,
        kos: { connect: { id: dto.kos_id } },
        user: { connect: { id: dto.user_id } },
      },
    })
  }

  findAll() {
    return this.prisma.review.findMany({
      include: {
        kos: true,
        user: true,
      },
    })
  }
}