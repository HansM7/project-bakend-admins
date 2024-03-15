import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AdminsService } from 'src/admins/admins.service';
import { JwtPayload } from 'src/common/interfaces/auth.interface';
import { ResponseService } from 'src/common/services/response.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly adminService: AdminsService,
    private readonly responseService: ResponseService,
  ) {
    super({
      secretOrKey: 'token-secret',
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

  async validate(payload: JwtPayload): Promise<any> {
    const admin = await this.adminService.findOne(payload.id);
    if (!admin) throw new UnauthorizedException();
    if (!admin.enabled) throw new UnauthorizedException();
    return admin;
    // todo de aqui sale la info de la request
  }
}
