import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from '@/database/prisma.module';
import { HealthModule } from '@/modules/health/health.module';
import { AuthModule } from '@/modules/auth/auth.module';
import { UsersModule } from '@/modules/users/users.module';
import { ListingsModule } from '@/modules/listings/listings.module';
import { BookingsModule } from '@/modules/bookings/bookings.module';
import { ReviewsModule } from '@/modules/reviews/reviews.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    PrismaModule,
    HealthModule,
    AuthModule,
    UsersModule,
    ListingsModule,
    BookingsModule,
    ReviewsModule,
  ],
})
export class AppModule {}
