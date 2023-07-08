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

function submitForm(event) {
  const form = event.target;
  const email = form.email.value;
  const password = form.password.value;

  // Validate the form fields
  if (!email || !password) {
      console.log('Input fields are required: email: ' + email + ' password: ' + password);
      return;
  }

  // const { rows: users } = await db.query('SELECT * FROM users where email = $1', [email, password]);
  console.log(users);

  // window.location.replace('/product');
};