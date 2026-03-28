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

  const SUPABASE_URL = process.env.SUPABASE_URL;
  const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!SUPABASE_URL || !SUPABASE_KEY) {
    return res.status(500).json({ error: 'Storage not configured' });
  }

  try {
    const contentType = req.headers['content-type']?.split(';')[0]?.trim();
    if (!contentType || !ALLOWED_TYPES[contentType]) {
      return res.status(400).json({ error: 'File type not allowed. Accepted: JPEG, PNG, WebP, GIF, PDF' });
    }

    const contentLength = parseInt(req.headers['content-length'] || '0', 10);
    if (contentLength > MAX_SIZE) {
      return res.status(400).json({ error: 'File too large. Maximum size: 10 MB' });
    }

    // Read request body as buffer
    const chunks: Buffer[] = [];
    for await (const chunk of req as any) {
      chunks.push(Buffer.from(chunk));
    }
    const buffer = Buffer.concat(chunks);

    const ext = ALLOWED_TYPES[contentType];
    const filename = `uploads/${Date.now()}-${Math.random().toString(36).slice(2, 8)}${ext}`;

    // Upload to Supabase Storage
    const uploadRes = await fetch(
      `${SUPABASE_URL}/storage/v1/object/images/${filename}`,
      {
        method: 'POST',
        headers: {
          'apikey': SUPABASE_KEY,
          'Authorization': `Bearer ${SUPABASE_KEY}`,
          'Content-Type': contentType,
          'x-upsert': 'true',
        },
        body: buffer,
      }
    );

    if (!uploadRes.ok) {
      const err = await uploadRes.text();
      console.error('Supabase upload error:', err);
      return res.status(500).json({ error: 'Upload to storage failed' });
    }

    const publicUrl = `${SUPABASE_URL}/storage/v1/object/public/images/${filename}`;
    return res.json({ url: publicUrl });
  } catch (e) {
    console.error('Upload error:', e);
    return res.status(500).json({ error: 'Upload failed' });
  }
}
