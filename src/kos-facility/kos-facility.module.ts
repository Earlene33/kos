import { Module } from '@nestjs/common'
import { KosFacilityService } from './kos-facility.service'
import { KosFacilityController } from './kos-facility.controller'
import { PrismaModule } from '../prisma/prisma.module'

@Module({
  imports: [PrismaModule],
  controllers: [KosFacilityController],
  providers: [KosFacilityService],
})
export class KosFacilityModule {}