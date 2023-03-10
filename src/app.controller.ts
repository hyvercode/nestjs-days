import { Controller, Get, Param, Query, Redirect } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  //Get
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  //Get with param
  @Get('/id/:id')
  findOne(@Param() params): string {
    return `This action returns a #${params.id}`;
  }

  //Get Redirect
  @Get('docs')
  @Redirect('https://docs.nestjs.com', 302)
  getDocs(@Query('version') version) {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }
}
