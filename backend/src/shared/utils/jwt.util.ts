import jwt from 'jsonwebtoken'
import { JWT_SECRET, JWT_TTL } from '@config/jwt'

export function signAccessToken(userId: string) {
  return jwt.sign({ sub: userId }, JWT_SECRET, { expiresIn: JWT_TTL })
}

export function verifyAccessToken(token: string) {
  return jwt.verify(token, JWT_SECRET)
}
