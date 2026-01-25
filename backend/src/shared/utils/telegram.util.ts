import { validate, parse } from '@telegram-apps/init-data-node';
import { env } from '@/config/env';

export function parseTelegramInitData(initData: string) {
  validate(initData, env.TELEGRAM_BOT_TOKEN, { expiresIn: 60 });
  return parse(initData);
}
