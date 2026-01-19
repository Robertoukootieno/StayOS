import { Pool } from 'pg';
import { Logger } from '@stayos/shared';

const logger = new Logger('Database');

export function createDatabasePool(): Pool {
  const pool = new Pool({
    host: process.env.DATABASE_HOST || 'localhost',
    port: parseInt(process.env.DATABASE_PORT || '5432'),
    database: process.env.DATABASE_NAME || 'stayos',
    user: process.env.DATABASE_USER || 'postgres',
    password: process.env.DATABASE_PASSWORD || 'postgres',
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
  });

  pool.on('connect', () => {
    logger.info('Database connection established');
  });

  pool.on('error', (err) => {
    logger.error('Unexpected database error', { error: err.message });
  });

  return pool;
}

export async function testDatabaseConnection(pool: Pool): Promise<boolean> {
  try {
    const result = await pool.query('SELECT NOW()');
    logger.info('Database connection test successful', {
      timestamp: result.rows[0].now,
    });
    return true;
  } catch (error) {
    logger.error('Database connection test failed', {
      error: error instanceof Error ? error.message : 'Unknown error',
    });
    return false;
  }
}

