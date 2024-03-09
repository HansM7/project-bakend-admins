import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginAuthDto } from './dto/login-auth.dto';
import { AdminsService } from 'src/admins/admins.service';

import * as bcrypt from 'bcrypt';
import { JwtPayload } from 'src/common/interfaces/auth.interface';
import { JwtService } from '@nestjs/jwt';
import { ResponseService } from 'src/common/services/response.service';

@Injectable()
export class AuthService {
  constructor(
    private adminService: AdminsService,
    private readonly jwtService: JwtService,
    private readonly responseService: ResponseService,
  ) {}

  async login(loginAuthDto: LoginAuthDto) {
    try {
      const { email, password } = loginAuthDto;
      const admin = await this.adminService.findByEmail(email);

      if (!bcrypt.compareSync(password, admin.password)) {
        throw new UnauthorizedException('Credentials do not match');
      }

      const token = this.getJwt({ id: admin.id });

      return this.responseService.createResponse(
        true,
        'Authentication successful',
        {
          token,
        },
      );
    } catch (error) {
      this.responseService.createErrors(error);
    }
  }

  private getJwt(payload: JwtPayload) {
    const token = this.jwtService.sign(payload);
    return token;
  }
}
