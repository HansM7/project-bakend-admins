import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { AdminsModule } from 'src/admins/admins.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [AdminsModule],
})
export class SeedModule {}
