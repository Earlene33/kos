import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { CreateKosDto } from './dto/create-kos.dto'
import { UpdateKosDto } from './dto/update-kos.dto'

@Injectable()
export class KosService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateKosDto) {
    return this.prisma.kos.create({
      data: dto,
    })
  }

  async findAll() {
    return this.prisma.kos.findMany({
      include: {
        user: true,
        images: true,
        facilities: true,
      },
    })
  }

  async findOne(id: number) {
  try {
    console.log('ID:', id)

    const kos = await this.prisma.kos.findUnique({
      where: { id },
      include: {
        user: true,
        images: true,
        facilities: true,
      },
    })

    console.log('RESULT:', kos)

    if (!kos) {
      throw new Error('Kos tidak ditemukan')
    }

    return kos
  } catch (error) {
    console.error('ERROR KOS:', error)
    throw error
  }
}

  async update(id: number, dto: UpdateKosDto) {
    await this.findOne(id) // biar cek dulu ada atau tidak

    return this.prisma.kos.update({
      where: { id },
      data: dto,
    })
  }

  async remove(id: number) {
    await this.findOne(id)

    return this.prisma.kos.delete({
      where: { id },
    })
  }
}