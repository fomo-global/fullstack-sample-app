import path from 'path';
import winston from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';

const logDir = path.resolve(process.cwd(), 'logs');

export const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),

    new DailyRotateFile({
      dirname: logDir,
      filename: 'app-%DATE%.log',
      datePattern: 'YYYY-MM-DD',
    }),
  ],
});
