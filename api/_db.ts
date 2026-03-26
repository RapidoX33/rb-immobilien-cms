export const getSQL = async () => {
  if (!process.env.DATABASE_URL) return null;
  const { neon } = await import('@neondatabase/serverless');
  return neon(process.env.DATABASE_URL);
};

export const initDB = async () => {
  const sql = await getSQL();
  if (!sql) return;
  await sql`
    CREATE TABLE IF NOT EXISTS settings (
      key VARCHAR(255) PRIMARY KEY,
      value JSONB
    )
  `;
};
