import jwt from 'jsonwebtoken';
import { env } from '@/config/env';

export function signAccessToken(userId: string) {
  return jwt.sign({ sub: userId }, env.JWT_SECRET, { expiresIn: env.JWT_TTL });
}

export function verifyAccessToken(token: string) {
  return jwt.verify(token, env.JWT_SECRET);
}
