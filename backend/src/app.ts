import express from 'express';
import { router as todos } from './modules/todos';

export const app = express();

app
  .use(express.json())
  .use(todos);