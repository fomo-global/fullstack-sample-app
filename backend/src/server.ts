import { app } from './app';
import { connectToDatabase, syncDatabase } from './db/index';
import type { Server } from 'http';

const PORT = Number(process.env.PORT || 3001);

//. Функция: запуск HTTP-сервера
function startHttpServer(): Promise<Server> {
  return new Promise((resolve, reject) => {
    const server = app.listen(PORT, '0.0.0.0', (err) => {
      if (err) {
        return reject(new Error('SERVER_START_ERROR: ' + err.message));
      }
      console.log(`🚀 [SERVER] Listening on port ${PORT}`);
      resolve(server);
    });
  });
}

//. Главная функция: поэтапный запуск
async function startServer() {
  try {
    await connectToDatabase();
    await syncDatabase();
    await startHttpServer();
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error('💥 Application failed during startup:', message);

    if (message.startsWith('DB_AUTH_ERROR')) {
      console.error('ℹ️ DB authentication failed');
    }

    if (message.startsWith('DB_SYNC_ERROR')) {
      console.error('ℹ️ DB sync failed');
    }

    if (message.startsWith('SERVER_START_ERROR')) {
      console.error('ℹ️ HTTP server failed to start');
    }

    process.exit(1);
  }
}

startServer();
