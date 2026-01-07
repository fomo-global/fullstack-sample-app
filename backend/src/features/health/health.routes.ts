import { Router } from 'express'
import { telegramAuth } from './health.controller'

export const authRoutes = Router()

authRoutes
    .post('/api/telegram', telegramAuth)