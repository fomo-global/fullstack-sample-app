import { validate, parse } from '@telegram-apps/init-data-node'

export function parseTelegramInitData( initData: string ) {
  validate(initData, '8068396102:AAEpKAjkw6TQiHiraOdaJ9loDElAp7f4GmU', { expiresIn: 60 })
  return parse(initData)
}
