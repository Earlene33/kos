import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common'
import { KosService } from './kos.service'
import { CreateKosDto } from './dto/create-kos.dto'
import { UpdateKosDto } from './dto/update-kos.dto'

@Controller('kos')
export class KosController {
  constructor(private readonly kosService: KosService) {}

  @Post()
  create(@Body() dto: CreateKosDto) {
    return this.kosService.create(dto)
  }

  @Get()
  findAll() {
    return this.kosService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.kosService.findOne(+id)
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateKosDto) {
    return this.kosService.update(+id, dto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.kosService.remove(+id)
  }
}