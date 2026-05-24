import { Controller, Post, Body, Get } from '@nestjs/common'
import { KosFacilityService } from './kos-facility.service'
import { CreateKosFacilityDto } from './dto/create-kos-facility.dto'

@Controller('kos-facility')
export class KosFacilityController {
  constructor(private readonly service: KosFacilityService) {}

  @Post()
  create(@Body() dto: CreateKosFacilityDto) {
    return this.service.create(dto)
  }

  @Get()
  findAll() {
    return this.service.findAll()
  }
}