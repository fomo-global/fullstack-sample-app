import { Router } from 'express'
import { telegramAuth } from './health.controller'

export const healthRoutes = Router()

healthRoutes
    .post('/api/health', telegramAuth)
    .get('/api/health', (_req, res) => res.status(200).send("ok"))