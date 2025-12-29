import * as Joi from 'joi';
import { EnvironmentVariables } from './enironment.config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export interface ConfigType {
  env: EnvironmentVariables;
  database: TypeOrmModuleOptions;
}

export const configSchema = Joi.object({
  PORT: Joi.number().default(3000),
  DB_URL: Joi.string().required(),
  DB_DROP: Joi.number().valid(0, 1).default(0),
});
