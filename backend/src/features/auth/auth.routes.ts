import { Router } from 'express'
import { telegramAuth } from './auth.controller'

export const authRoutes = Router()

authRoutes
    .post('/api/telegram', telegramAuth)