import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { CreateBookingDto } from './dto/create-booking.dto'

@Injectable()
export class BookingService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateBookingDto) {
    return this.prisma.booking.create({
      data: {
        kos: {
          connect: { id: dto.kos_id },
        },
        user: {
          connect: { id: dto.user_id },
        },
        start_date: new Date(dto.start_date),
        end_date: new Date(dto.end_date),
      },
    })
  }

  findAll() {
    return this.prisma.booking.findMany({
      include: {
        kos: true,
        user: true,
      },
    })
  }

  updateStatus(id: number, status: 'ACCEPT' | 'REJECT') {
    return this.prisma.booking.update({
      where: { id },
      data: { status },
    })
  }
}