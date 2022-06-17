import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  password: '000',
  host: 'localhost',
  port: 5432,
  database: 'node_postgres.training',
});

export default pool;
