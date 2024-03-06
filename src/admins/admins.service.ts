import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Admin } from './entities/admin.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ResponseService } from 'src/common/services/response.service';
import { NotFoundError } from 'rxjs';

@Injectable()
export class AdminsService {
  constructor(
    @InjectModel(Admin.name)
    private readonly adminModel: Model<Admin>,
    private readonly responseService: ResponseService,
  ) {}

  async create(createAdminDto: CreateAdminDto) {
    try {
      const created = await this.adminModel.create(createAdminDto);
      return this.responseService.createResponse(true, 'Admin crated', created);
    } catch (error) {
      this.handleErrors(error);
    }
  }

  async findAll() {
    try {
      return await this.adminModel.find();
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async findOne(id: string) {
    try {
      const admin = await this.adminModel
        .findOne({ id })
        .select('-_id -password');

      if (!admin || admin === null)
        throw new NotFoundException('Admin not found');
      return admin;
    } catch (error) {
      this.handleErrors(error);
    }
  }

  async update(id: string, updateAdminDto: UpdateAdminDto) {
    try {
      // todo this handles the possibles errors when finding and administrators
      await this.findOne(id);

      await this.adminModel.updateOne({ id }, updateAdminDto);
      return this.responseService.createResponse(
        true,
        'Admin updated successfully',
      );
    } catch (error) {
      this.handleErrors(error);
    }
  }

  async remove(id: string) {
    try {
      await this.findOne(id);
      await this.adminModel.deleteOne({ id });
      return this.responseService.createResponse(
        true,
        'Admin deleted successfully',
      );
    } catch (error) {
      this.handleErrors(error);
    }
  }

  private handleErrors(error: any) {
    // todo Errors in mongoDB
    if (error.code) {
      if (error.code === 11000) {
        throw new BadRequestException(
          `Admin exists in db ${JSON.stringify(error.keyValue)}`,
        );
      }
    } else {
      // todo Errors in code
      if (error instanceof BadRequestException) {
        throw new BadRequestException(error.message);
      } else if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      }
      throw new InternalServerErrorException();
    }
  }
}
