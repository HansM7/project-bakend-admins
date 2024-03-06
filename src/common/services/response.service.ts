import { Injectable } from '@nestjs/common';

@Injectable()
export class ResponseService {
  createResponse(ok: boolean, message: string, response: any = null) {
    return { ok, message, response };
  }
}
