const SUPABASE_URL = process.env.SUPABASE_URL?.trim();
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim();

export async function dbGet(): Promise<any | null> {
  if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY) return null;
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/settings?key=eq.site_content&select=value`, {
      headers: {
        'apikey': SUPABASE_SERVICE_KEY,
        'Authorization': `Bearer ${SUPABASE_SERVICE_KEY}`,
      },
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data.length > 0 ? data[0].value : null;
  } catch {
    return null;
  }
}

export async function dbSet(value: any): Promise<boolean> {
  if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY) return false;
  try {
    const body = JSON.stringify(value);
    // Upsert via POST with on_conflict
    const res = await fetch(`${SUPABASE_URL}/rest/v1/settings?on_conflict=key`, {
      method: 'POST',
      headers: {
        'apikey': SUPABASE_SERVICE_KEY,
        'Authorization': `Bearer ${SUPABASE_SERVICE_KEY}`,
        'Content-Type': 'application/json',
        'Prefer': 'resolution=merge-duplicates',
      },
      body: JSON.stringify({ key: 'site_content', value }),
    });
    return res.ok;
  } catch {
    return false;
  }
}
