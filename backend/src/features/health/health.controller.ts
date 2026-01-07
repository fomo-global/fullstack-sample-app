import { Request, Response } from 'express'
import { parseTelegramInitData } from '@/shared/utils/telegram.util'

export async function telegramAuth(
  req: Request<{}, any, {initData: string}>, 
  res: Response
) {
  try{
    const { initData } = req.body
    const parsedData = parseTelegramInitData(initData)
    res.json(parsedData)
    
  } catch (error) {

  }
}