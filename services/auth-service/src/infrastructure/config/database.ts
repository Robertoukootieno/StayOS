import { Pool } from 'pg';
import { Logger } from '@stayos/shared';

const logger = new Logger('Database');

export function createDatabasePool(): Pool {
  const pool = new Pool({
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '5432'),
    database: process.env.DB_NAME || 'stayos',
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres',
    max: parseInt(process.env.DB_POOL_MAX || '20'),
    idleTimeoutMillis: parseInt(process.env.DB_IDLE_TIMEOUT || '30000'),
    connectionTimeoutMillis: parseInt(process.env.DB_CONNECTION_TIMEOUT || '2000'),
  });

  pool.on('connect', () => {
    logger.info('New database connection established');
  });

  pool.on('error', (err) => {
    logger.error('Unexpected database error', { error: err.message });
  });

  return pool;
}

export async function testDatabaseConnection(pool: Pool): Promise<boolean> {
  try {
    const result = await pool.query('SELECT NOW()');
    logger.info('Database connection successful', { timestamp: result.rows[0].now });
    return true;
  } catch (error) {
    logger.error('Database connection failed', {
      error: error instanceof Error ? error.message : 'Unknown error',
    });
    return false;
  }
}

