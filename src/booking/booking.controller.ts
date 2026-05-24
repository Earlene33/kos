import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
} from '@nestjs/common'
import { BookingService } from './booking.service'
import { CreateBookingDto } from './dto/create-booking.dto'

@Controller('booking')
export class BookingController {
  constructor(private readonly service: BookingService) {}

  @Post()
  create(@Body() dto: CreateBookingDto) {
    return this.service.create(dto)
  }

  @Get()
  findAll() {
    return this.service.findAll()
  }

  @Patch(':id/accept')
  accept(@Param('id') id: string) {
    return this.service.updateStatus(+id, 'ACCEPT')
  }

  @Patch(':id/reject')
  reject(@Param('id') id: string) {
    return this.service.updateStatus(+id, 'REJECT')
  }
}