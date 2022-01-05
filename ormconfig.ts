module.exports = {
  type: process.env.DB_TYPE,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: ['src/domain/**/*.ts'],
  migrations: ['src/database/migrations/**/*.ts'],
  cli: {
    migrationsDir: ['src/database/migrations/'],
    entitiesDir: 'src/domain',
  },
};
