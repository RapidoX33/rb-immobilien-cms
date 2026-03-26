import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createToken, ADMIN_PASSWORD } from '../_auth.js';

const loginAttempts = new Map<string, { count: number; lastAttempt: number }>();
const MAX_ATTEMPTS = 5;
const WINDOW_MS = 15 * 60 * 1000;

function getClientIP(req: VercelRequest): string {
  const forwarded = req.headers['x-forwarded-for'];
  if (typeof forwarded === 'string') return forwarded.split(',')[0].trim();
  return req.socket?.remoteAddress || 'unknown';
}

function isRateLimited(ip: string): boolean {
  const record = loginAttempts.get(ip);
  if (!record) return false;
  if (Date.now() - record.lastAttempt > WINDOW_MS) {
    loginAttempts.delete(ip);
    return false;
  }
  return record.count >= MAX_ATTEMPTS;
}

function recordAttempt(ip: string): void {
  const record = loginAttempts.get(ip);
  if (!record || Date.now() - record.lastAttempt > WINDOW_MS) {
    loginAttempts.set(ip, { count: 1, lastAttempt: Date.now() });
  } else {
    record.count++;
    record.lastAttempt = Date.now();
  }
}

function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return result === 0;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const ip = getClientIP(req);
  if (isRateLimited(ip)) {
    return res.status(429).json({ error: 'Too many login attempts. Try again later.' });
  }

  const { password } = req.body || {};
  if (typeof password !== 'string' || !password) {
    return res.status(400).json({ error: 'Password required' });
  }

  if (timingSafeEqual(password, ADMIN_PASSWORD!)) {
    loginAttempts.delete(ip);
    const token = await createToken();
    return res.json({ token });
  }

  recordAttempt(ip);
  return res.status(401).json({ error: 'Invalid password' });
}
