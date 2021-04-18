import { Controller, Get, Render } from '@nestjs/common';

@Controller('home')
export class HomeController {
  @Get('/home')
  @Render('home')
  homePage() {
    return { a: 1, b: 2, c: [3, 4, 5] };
  }
}
