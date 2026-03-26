import type { VercelRequest } from '@vercel/node';

const JWT_SECRET = process.env.JWT_SECRET;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

if (!JWT_SECRET) throw new Error('JWT_SECRET environment variable is required');
if (!ADMIN_PASSWORD) throw new Error('ADMIN_PASSWORD environment variable is required');

export const verifyToken = async (req: VercelRequest): Promise<boolean> => {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith('Bearer ')) return false;
  const token = authHeader.slice(7);
  if (!token) return false;
  try {
    const jwt = await import('jsonwebtoken');
    jwt.default.verify(token, JWT_SECRET);
    return true;
  } catch {
    return false;
  }
};

export const createToken = async (): Promise<string> => {
  const jwt = await import('jsonwebtoken');
  return jwt.default.sign({ admin: true }, JWT_SECRET, { expiresIn: '2h' });
};

export { ADMIN_PASSWORD };
