import pg from 'pg';

const { Pool } = pg;

export default new Pool({
  user: 'postgres',
  password: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'node_postgres_training',
});
