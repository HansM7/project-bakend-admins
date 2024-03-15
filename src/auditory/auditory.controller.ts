import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuditoryService } from './auditory.service';
import { CreateAuditoryDto } from './dto/create-auditory.dto';
import { UpdateAuditoryDto } from './dto/update-auditory.dto';

@Controller('auditory')
export class AuditoryController {
  constructor(private readonly auditoryService: AuditoryService) {}

  @Post()
  create(@Body() createAuditoryDto: CreateAuditoryDto) {
    return this.auditoryService.create(createAuditoryDto);
  }

  @Get()
  findAll() {
    return this.auditoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.auditoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuditoryDto: UpdateAuditoryDto) {
    return this.auditoryService.update(+id, updateAuditoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.auditoryService.remove(+id);
  }
}
