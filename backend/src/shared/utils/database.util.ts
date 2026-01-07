import { sequelize } from "@/config/database"

export async function connectToDatabase() {
  console.log('🔌 [DB] Trying to authenticate...')
  try {
    await sequelize.authenticate()
    console.log('✅ [DB] Authentication successful')
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err)
    console.error('❌ [DB] Authentication error:', message)
    throw new Error('DB_AUTH_ERROR: ' + message)
  }
}

export async function syncDatabase() {
  console.log('🗄️ [DB] Syncing models...')
  try {
    await sequelize.sync()
    console.log('✅ [DB] Models synchronized')
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err)
    console.error('❌ [DB] Sync error:', message)
    throw new Error('DB_SYNC_ERROR: ' + message)
  }
}