import type { VercelRequest, VercelResponse } from '@vercel/node';
import { dbGet, dbSet } from './_db.js';
import { verifyToken } from './_auth.js';

const MAX_PAYLOAD_SIZE = 1024 * 1024; // 1 MB

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'GET') {
    try {
      const data = await dbGet();
      return res.json(data);
    } catch {
      return res.status(500).json({ error: 'Internal server error' });
    }
  }

  if (req.method === 'POST') {
    if (!(await verifyToken(req))) return res.status(401).json({ error: 'Unauthorized' });
    try {
      const body = typeof req.body === 'string' ? req.body : JSON.stringify(req.body);
      if (body.length > MAX_PAYLOAD_SIZE) {
        return res.status(400).json({ error: 'Payload too large' });
      }
      const content = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
      await dbSet(content);
      return res.json({ ok: true });
    } catch {
      return res.status(500).json({ error: 'Internal server error' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
