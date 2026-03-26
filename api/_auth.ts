import type { VercelRequest } from '@vercel/node';

export const getJwtSecret = () => {
  const secret = process.env.JWT_SECRET;
  if (!secret) throw new Error('JWT_SECRET environment variable is required');
  return secret;
};

export const getAdminPassword = () => {
  const pw = process.env.ADMIN_PASSWORD;
  if (!pw) throw new Error('ADMIN_PASSWORD environment variable is required');
  return pw;
};

export const verifyToken = async (req: VercelRequest): Promise<boolean> => {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith('Bearer ')) return false;
  const token = authHeader.slice(7);
  if (!token) return false;
  try {
    const jwt = await import('jsonwebtoken');
    jwt.default.verify(token, getJwtSecret());
    return true;
  } catch {
    return false;
  }
};

export const createToken = async (): Promise<string> => {
  const jwt = await import('jsonwebtoken');
  return jwt.default.sign({ admin: true }, getJwtSecret(), { expiresIn: '2h' });
};
