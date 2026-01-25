import morgan from 'morgan';
import { Request } from 'express';
import { logger } from './logger';

// свой токен для body (по желанию)
morgan.token('body', (req: Request) => {
  return JSON.stringify(req.body);
});

export const httpLogger = morgan(':method :url :status :response-time ms', {
  stream: {
    write: (message) => logger.info(message.trim()),
  },
});
