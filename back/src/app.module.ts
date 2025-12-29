import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { environmentVariables } from './config/enironment.config';
import { configSchema } from './config/config.types';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      load: [environmentVariables],
      validationSchema: configSchema,
      validationOptions: { abortEarly: true },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
