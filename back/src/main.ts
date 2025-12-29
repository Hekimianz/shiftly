import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ConfigType } from './config/config.types';
import { EnvironmentVariables } from './config/enironment.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService<ConfigType>);
  const env = configService.get<EnvironmentVariables>('env');
  const PORT = env?.port ?? 3001;
  await app.listen(PORT);
  console.log(`Server listening on port ${PORT}`);
}
void bootstrap();
