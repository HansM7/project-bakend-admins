import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';

@Injectable()
export class ResponseService {
  createResponse(ok: boolean, message: string, response: any = null) {
    return { ok, message, response };
  }

  createErrors(error: any) {
    if (error.code) {
      if (error.code === 11000)
        throw new BadRequestException(
          `Admin exists in db ${JSON.stringify(error.keyValue)}`,
        );
    } else {
      if (error instanceof BadRequestException)
        throw new BadRequestException(error.message);
      if (error instanceof UnauthorizedException)
        throw new UnauthorizedException(error.message);
      if (error instanceof NotFoundException)
        throw new NotFoundException(error.message);
      throw new InternalServerErrorException(error);
    }
  }
}
