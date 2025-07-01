import { Pool } from 'pg';

const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: 5432,
  ssl: {
    rejectUnauthorized: false,
  },
});

export default async function handler(req, res) {
  try {
    const result = await pool.query('SELECT NOW()');
    res.status(200).json({ time: result.rows[0].now });
  } catch (error) {
    console.error('DB Error:', error);
    res.status(500).json({ error: 'DB connection failed' });
  }
}
