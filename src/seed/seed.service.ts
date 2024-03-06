import { Injectable } from '@nestjs/common';
import { AdminsService } from 'src/admins/admins.service';
import { dataAdmin } from './data';

@Injectable()
export class SeedService {
  constructor(private readonly adminService: AdminsService) {}

  seedAdmin() {
    for (let index = 0; index < dataAdmin.length; index++) {
      this.adminService.create(dataAdmin[index] as any);
    }

    return 'Seed admin executed successfully, congratulations ✨';
  }
}
