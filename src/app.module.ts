import { Module } from '@nestjs/common'
import { AuthModule } from './auth/auth.module'
import { PrismaModule } from './prisma/prisma.module'
import { KosModule } from './kos/kos.module'
import { UsersModule } from './users/users.module'
import { KosImageModule } from './kos-image/kos-image.module'
import { KosFacilityModule } from './kos-facility/kos-facility.module'
import { BookingModule } from './booking/booking.module'
import { ReviewModule } from './review/review.module'

@Module({
  imports: [
    KosModule,
    UsersModule,
    KosImageModule,
    KosFacilityModule,
    BookingModule,
    ReviewModule,
    PrismaModule,
    AuthModule,
  ],
})
export class AppModule {}