import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { CustomDecorator } from './app.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  // @CustomDecorator() // works
  getHello(): string {
    return this.getStr();
  }

  @CustomDecorator() // doesn't work
  getStr() {
    return this.appService.getHello();
  }
}
