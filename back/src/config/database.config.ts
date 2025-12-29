import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from 'src/users/user.entity';

export const typeOrmConfig = registerAs(
  'database',
  (): TypeOrmModuleOptions => ({
    type: 'postgres',
    url: process.env.DB_URL,
    ssl: {
      rejectUnauthorized: false,
    },
    autoLoadEntities: true,
    synchronize: true,
    dropSchema: Number(process.env.DB_DROP) === 1,
    entities: [User],
  }),
);
