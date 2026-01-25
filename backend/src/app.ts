import express from 'express';
import cors from 'cors';
import { corsOptions } from '@config/cors';
import { authRoutes, healthRoutes } from '@/features';
import { httpLogger } from './logger/httpLogger';

export const app = express();

app.use(express.json()).use(cors(corsOptions)).use(httpLogger).use(healthRoutes).use(authRoutes);
