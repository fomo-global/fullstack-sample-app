import 'dotenv/config'

//проверяем точно ли приходит env
const requiredEnv = (name: string): string => {
    const env = process.env[name]
    if(!env){
        throw new Error(`Пропал env: ${name}`)
    }
    return env
}

const ttl = (name: string, defaultValue = "15m"): `${number}${"s" | "m" | "h" | "d"}`  => {
  const raw = (process.env[name] ?? defaultValue).trim();

  if (!/^\d+(s|m|h|d)$/.test(raw)) {
    throw new Error(
      `Env ${name} must match ^\\d+(s|m|h|d)$ like 15m or 1h, got "${raw}"`
    );
  }

  return raw as `${number}${"s" | "m" | "h" | "d"}`;
}

export const env = {
    //app
    BACKEND_PORT: Number(requiredEnv('BACKEND_PORT')),

    // db
    POSTGRES_HOST: process.env.POSTGRES_HOST,
    POSTGRES_PORT: Number(process.env.POSTGRES_PORT),
    POSTGRES_DB: process.env.POSTGRES_DB,
    POSTGRES_USER: process.env.POSTGRES_USER,
    POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,

    // jwt
    JWT_SECRET: requiredEnv('JWT_SECRET'),
    JWT_TTL: ttl('JWT_TTL', '2m'),

    //telegram
    TELEGRAM_BOT_TOKEN: requiredEnv('TELEGRAM_BOT_TOKEN')
}
