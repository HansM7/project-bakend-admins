import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { AdminsModule } from './admins/admins.module';
import { ClinicsModule } from './clinics/clinics.module';
import { UsersModule } from './users/users.module';
import { SubscriptionsModule } from './subscriptions/subscriptions.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CommonModule } from './common/common.module';
import { SeedModule } from './seed/seed.module';
import { ConfigModule } from '@nestjs/config';
import { AuditoryModule } from './auditory/auditory.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthModule,
    AdminsModule,
    ClinicsModule,
    UsersModule,
    SubscriptionsModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/backend-admin'),
    CommonModule,
    SeedModule,
    AuditoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor() {}
}
