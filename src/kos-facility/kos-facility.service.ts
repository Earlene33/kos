import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { CreateKosFacilityDto } from './dto/create-kos-facility.dto'

@Injectable()
export class KosFacilityService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateKosFacilityDto) {
    return this.prisma.kosFacility.create({
      data: {
        facility: dto.facility,
        kos: {
          connect: { id: dto.kos_id },
        },
      },
    })
  }

  findAll() {
    return this.prisma.kosFacility.findMany({
      include: { kos: true },
    })
  }
}