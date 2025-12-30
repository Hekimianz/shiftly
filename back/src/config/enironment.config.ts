import { registerAs } from '@nestjs/config';
export interface EnvironmentVariables {
  port: number;
  jwt_secret: string;
}

export const environmentVariables = registerAs(
  'env',
  (): EnvironmentVariables => ({
    port: parseInt(process.env.PORT ?? '3000', 10),
    jwt_secret: process.env.JWT_SECRET,
  }),
);
