import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  // CREATE
  async create(dto: CreateUserDto) {
    return this.prisma.user.create({
      data: dto,
    })
  }

  // GET ALL
  async findAll() {
    return [{ messege : 'test berhasil'}]
  }

  // GET ONE
  async findOne(id: number) {
    const user = await this.prisma.user.findUnique({
      where: { id },
    })

    if (!user) {
      throw new NotFoundException('User tidak ditemukan')
    }

    return user
  }

  // UPDATE
  async update(id: number, dto: UpdateUserDto) {
    await this.findOne(id)

    return this.prisma.user.update({
      where: { id },
      data: dto,
    })
  }

  // DELETE
  async remove(id: number) {
    await this.findOne(id)

    return this.prisma.user.delete({
      where: { id },
    })
  }
}