import {POSTGRES_URL} from '$env/static/private'
import { createPool } from '@vercel/postgres';

export async function load() {
	const db = createPool({
    connectionString: POSTGRES_URL
  });
  const startTime = Date.now();

  try {
		const { rows: users } = await db.query('SELECT * FROM users');
		const duration = Date.now() - startTime;
		return {
			users: users,
			duration: duration
		};
	} catch (error) {
      throw error;
	}
}