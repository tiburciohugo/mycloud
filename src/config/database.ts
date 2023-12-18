import { DataSource } from 'typeorm';

export const PostgresConnection = new DataSource({
  type: 'postgres',
  host: 'db',
  port: parseInt(process.env.POSTGRES_PORT),
  url: process.env.DATABASE_URL,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: ['src/entity/**/*.ts'],
  synchronize: true,
  logging: true,
  migrations: ['src/migrations/**/*.ts'],
  migrationsRun: true
});
