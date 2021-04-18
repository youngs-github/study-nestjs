import {
  Controller,
  Get,
  Param,
  Query,
  Headers,
  Body,
  Post,
  Request,
  Response,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/:id')
  getHello(@Param() param): string {
    console.log('param', param);
    return this.appService.getHello();
  }

  @Post('/home')
  async getHome(
    @Query('a') a,
    @Query('b') b,
    @Query('c') c,
    @Headers() headers,
    @Body() body,
    @Request() req,
  ): Promise<string> {
    console.log('a', a, b, c);
    console.log('body', req.body);
    console.log('query', req.query);
    return this.appService.getHome();
  }
}
