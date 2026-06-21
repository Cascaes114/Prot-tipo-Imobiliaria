import { createClient } from '@libsql/client';

const client = createClient({
  url: process.env.NEXT_PUBLIC_TURSO_DATABASE_URL || 'file:imobiliaria.db',
  authToken: process.env.NEXT_PUBLIC_TURSO_AUTH_TOKEN,
});

export function getDb() {
  return client;
}

// Helper functions to match the old API patterns

export async function dbAll(sql: string, args: any[] = []) {
  const result = await client.execute({ sql, args });
  return result.rows;
}

export async function dbGet(sql: string, args: any[] = []) {
  const result = await client.execute({ sql, args });
  return result.rows[0] || null;
}

export async function dbRun(sql: string, args: any[] = []) {
  return await client.execute({ sql, args });
}
