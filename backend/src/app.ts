import express from 'express'
import { authRoutes } from '@features/health/health.routes'

export const app = express()

app
  .use(express.json())
  .use(authRoutes)