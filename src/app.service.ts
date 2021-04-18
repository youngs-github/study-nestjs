import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getHome(): string {
    return JSON.stringify([
      {
        id: 1,
        name: 'home',
      },
    ]);
  }
}
