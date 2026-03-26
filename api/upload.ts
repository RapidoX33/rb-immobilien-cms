import type { VercelRequest, VercelResponse } from '@vercel/node';
import { verifyToken } from './_auth.js';

export const config = {
  api: {
    bodyParser: false,
  },
};

const ALLOWED_TYPES: Record<string, string> = {
  'image/jpeg': '.jpg',
  'image/png': '.png',
  'image/webp': '.webp',
  'image/gif': '.gif',
  'application/pdf': '.pdf',
};

const MAX_SIZE = 10 * 1024 * 1024; // 10 MB

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  if (!(await verifyToken(req))) return res.status(401).json({ error: 'Unauthorized' });

  try {
    const contentType = req.headers['content-type']?.split(';')[0]?.trim();
    if (!contentType || !ALLOWED_TYPES[contentType]) {
      return res.status(400).json({ error: 'File type not allowed. Accepted: JPEG, PNG, WebP, GIF, PDF' });
    }

    const contentLength = parseInt(req.headers['content-length'] || '0', 10);
    if (contentLength > MAX_SIZE) {
      return res.status(400).json({ error: 'File too large. Maximum size: 10 MB' });
    }

    const { put } = await import('@vercel/blob');
    const ext = ALLOWED_TYPES[contentType];
    const safeFilename = `upload-${Date.now()}-${Math.random().toString(36).slice(2, 8)}${ext}`;

    const blob = await put(safeFilename, req, {
      access: 'public',
      contentType,
    });

    return res.json({ url: blob.url });
  } catch {
    return res.status(500).json({ error: 'Upload failed' });
  }
}
