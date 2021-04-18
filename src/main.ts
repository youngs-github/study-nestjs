import { resolve } from 'path';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(resolve(__dirname, '../public/'), {
    prefix: '/',
  });
  // 模板引擎
  app.setViewEngine('ejs');
  app.setBaseViewsDir('view');
  await app.listen(3000);
}
bootstrap();
