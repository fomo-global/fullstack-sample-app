import { env } from './config/env';
import { app } from './app';
import { connectToDatabase, syncDatabase } from '@/shared/utils/database.util';
import type { Server } from 'http';
import { logger } from './logger/logger';

const HOST = '0.0.0.0';

// Функция: запуск HTTP-сервера
function startHttpServer(): Promise<Server> {
  return new Promise((resolve, reject) => {
    const server = app.listen(env.BACKEND_PORT, HOST, () => {
      logger.info('HTTP server started', {
        stage: 'http',
        host: HOST,
        port: env.BACKEND_PORT,
      });
      resolve(server);
    });

    // app.listen обычно не даёт err в колбэке, поэтому ловим событие error
    server.on('error', (err: NodeJS.ErrnoException) => {
      reject(err);
    });
  });
}

// Главная функция: поэтапный запуск
async function startServer() {
  try {
    await connectToDatabase();
    await syncDatabase();
    await startHttpServer();
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    logger.info('💥 Application failed during startup:', message);

    if (message.startsWith('DB_AUTH_ERROR')) {
      logger.error('ℹ️ DB authentication failed');
    }

    if (message.startsWith('DB_SYNC_ERROR')) {
      logger.error('ℹ️ DB sync failed');
    }

    if (message.startsWith('SERVER_START_ERROR')) {
      logger.error('ℹ️ HTTP server failed to start');
    }

    process.exit(1);
  }
}

startServer();
