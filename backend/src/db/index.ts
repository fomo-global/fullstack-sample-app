import { Sequelize } from 'sequelize';

//Устанавливает соединение с БД
//Хранит все модели
//Даёт API для работы с БД
export const sequelize = new Sequelize({
  dialect: 'postgres',          // говорим, что БД = Postgres
  host: 'db',                   // ВАЖНО: имя сервиса в docker-compose, не localhost
  port: 5432,                   // порт
  database: 'db_progect_1',     // имя базы данных
  username: 'user_progect_1',   // пользователь
  password: 'user_password_1',  // пароль
  logging: false,               // отключаем спам SQL в консоль
});

// 1. Функция: подключение к базе (authenticate)
export async function connectToDatabase() {
  console.log('🔌 [DB] Trying to authenticate...');
  try {
    await sequelize.authenticate();
    console.log('✅ [DB] Authentication successful');
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error('❌ [DB] Authentication error:', message);
    throw new Error('DB_AUTH_ERROR: ' + message);
  }
}

// 2. Функция: синхронизация моделей (sync)
export async function syncDatabase() {
  console.log('🗄️ [DB] Syncing models...');
  try {
    await sequelize.sync(); 
    console.log('✅ [DB] Models synchronized');
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error('❌ [DB] Sync error:', message);
    throw new Error('DB_SYNC_ERROR: ' + message);
  }
}
