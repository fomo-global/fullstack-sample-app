import { sequelize } from '@/config/database';
import { logger } from '@/logger/logger';

export async function connectToDatabase() {
  logger.info('🔌 [DB] Trying to authenticate...');
  try {
    await sequelize.authenticate();
    logger.info('✅ [DB] Authentication successful');
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    logger.error('❌ [DB] Authentication error:', message);
    throw new Error('DB_AUTH_ERROR: ' + message);
  }
}

export async function syncDatabase() {
  logger.info('🗄️ [DB] Syncing models...');
  try {
    await sequelize.sync();
    logger.info('✅ [DB] Models synchronized');
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    logger.error('❌ [DB] Sync error:', message);
    throw new Error('DB_SYNC_ERROR: ' + message);
  }
}
