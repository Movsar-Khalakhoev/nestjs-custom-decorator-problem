import { CanActivate, ExecutionContext } from '@nestjs/common';

export class Guard implements CanActivate {
  canActivate(context: ExecutionContext) {
    console.log('hello');
    return true;
  }
}
