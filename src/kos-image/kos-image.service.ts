import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { CreateKosImageDto } from './dto/create-kos-image.dto'

@Injectable()
export class KosImageService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateKosImageDto) {
    return this.prisma.kosImage.create({
      data: {
        file: `http://localhost:3000/uploads/${dto.file}`,
        kos: {
          connect: { id: dto.kos_id },
        },
      },
    })
  }

  findAll() {
    return this.prisma.kosImage.findMany({
      include: {
        kos: true,
      },
    })
  }
}