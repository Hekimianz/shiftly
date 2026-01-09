import 'reflect-metadata';
import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ConfigType } from './config/config.types';
import { EnvironmentVariables } from './config/enironment.config';
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService<ConfigType>);
  const env = configService.get<EnvironmentVariables>('env');
  const PORT = env?.port ?? 3001;

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: { enableImplicitConversion: true },
    }),
  );

  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
  app.enableCors({
    origin: ['http://localhost:5173'],
    credentials: true,
  });
  await app.listen(PORT);
  console.log(`Server listening on port ${PORT}`);
}
void bootstrap();
