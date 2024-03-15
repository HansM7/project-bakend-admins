import { ExecutionContext, createParamDecorator } from '@nestjs/common';

export const AuthDecorator = createParamDecorator(
  (data, ctx: ExecutionContext) => {
    const req = ctx.switchToHttp().getRequest();
    const user = req.user;

    console.log('user?', user);
    return 'Hello bitch';
  },
);
