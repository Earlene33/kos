import { Module } from '@nestjs/common'
import { KosImageService } from './kos-image.service'
import { KosImageController } from './kos-image.controller'
import { PrismaModule } from '../prisma/prisma.module'

@Module({
  imports: [PrismaModule],
  controllers: [KosImageController],
  providers: [KosImageService],
})
export class KosImageModule {}