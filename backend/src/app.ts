import express from 'express'
import { authRoutes } from '@/features/auth/auth.routes'

export const app = express()

app
  .use(express.json())
  .use(authRoutes)