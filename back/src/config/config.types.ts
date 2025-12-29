import * as Joi from 'joi';
import { EnvironmentVariables } from './enironment.config';

export interface ConfigType {
  env: EnvironmentVariables;
}

export const configSchema = Joi.object({
  PORT: Joi.number().default(3000),
});
