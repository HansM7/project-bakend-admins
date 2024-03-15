import { Module } from '@nestjs/common';
import { AuditoryService } from './auditory.service';
import { AuditoryController } from './auditory.controller';

@Module({
  controllers: [AuditoryController],
  providers: [AuditoryService],
})
export class AuditoryModule {}
