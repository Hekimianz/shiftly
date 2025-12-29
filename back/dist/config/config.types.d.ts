import * as Joi from 'joi';
import { EnvironmentVariables } from './enironment.config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
export interface ConfigType {
    env: EnvironmentVariables;
    database: TypeOrmModuleOptions;
}
export declare const configSchema: Joi.ObjectSchema<any>;
