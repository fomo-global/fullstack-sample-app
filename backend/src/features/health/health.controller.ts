import { Request, Response } from 'express'
import { parseTelegramInitData } from '@/shared/utils/telegram.util'
import { findOrCreateByTelegramId } from './health.repo'
import { signAccessToken } from '@/shared/utils/jwt.util'

export async function telegramAuth(
  req: Request<{}, any, {initData: string}>, 
  res: Response
) {
  try{
    const { initData } = req.body
    const { user } = parseTelegramInitData(initData)
    if(user) {
      findOrCreateByTelegramId(user)
      const accessToken = signAccessToken(user?.id.toString())
    }

    res.json(user)
    
  } catch (error) {

  }
}