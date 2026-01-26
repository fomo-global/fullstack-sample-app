import { Request, Response } from 'express';

export async function telegramAuth(
  req: Request<{}, any, { text: string }>,
  res: Response,
) {
  try {
    const { text } = req.body;
    res.json(text);
  } catch (error) {}
}
