const { Client } = require('pg');

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'borrow_box',
  password: '240930',
  port: 5432,
});

(async () => {
  try {
    await client.connect();
    const res = await client.query('SELECT NOW() AS now');
    console.log('✅ Database connected at:', res.rows[0].now);
  } catch (err) {
    console.error('❌ DB connection failed:', err);
  } finally {
    await client.end();
  }
})();