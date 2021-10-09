import { applyDecorators, UseGuards } from '@nestjs/common';
import { Guard } from './app.guard';

export function CustomDecorator() {
  return applyDecorators(UseGuards(Guard));
}
