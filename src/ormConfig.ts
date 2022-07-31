import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

const config = {
  type: 'postgres',
  host: process.env.PG_HOST,
  port: Number(process.env.PG_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  synchronize: false,
  logging: false,
  entities: ['src/typeorm/entities/**/*.ts'],
  migrations: ['src/typeorm/migrations/**/*.ts'],
  subscribers: ['src/typeorm/subscriber/**/*.ts'],
  namingStrategy: new SnakeNamingStrategy(),
};

export = config;
