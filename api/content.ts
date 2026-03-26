import type { VercelRequest, VercelResponse } from '@vercel/node';
import { getSQL, initDB } from './_db.js';
import { verifyToken } from './_auth.js';

let initialized = false;

const MAX_PAYLOAD_SIZE = 1024 * 1024; // 1 MB (larger for properties data)

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (!initialized) {
    await initDB();
    initialized = true;
  }

  const sql = await getSQL();

  if (req.method === 'GET') {
    if (!sql) return res.json(null);
    try {
      const result = await sql`SELECT value FROM settings WHERE key = 'site_content'`;
      return res.json(result.length > 0 ? result[0].value : null);
    } catch {
      return res.status(500).json({ error: 'Internal server error' });
    }
  }

  if (req.method === 'POST') {
    if (!(await verifyToken(req))) return res.status(401).json({ error: 'Unauthorized' });
    if (!sql) return res.json({ ok: true });
    try {
      const body = typeof req.body === 'string' ? req.body : JSON.stringify(req.body);
      if (body.length > MAX_PAYLOAD_SIZE) {
        return res.status(400).json({ error: 'Payload too large' });
      }
      await sql`
        INSERT INTO settings (key, value) VALUES ('site_content', ${body}::jsonb)
        ON CONFLICT (key) DO UPDATE SET value = ${body}::jsonb
      `;
      return res.json({ ok: true });
    } catch {
      return res.status(500).json({ error: 'Internal server error' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
