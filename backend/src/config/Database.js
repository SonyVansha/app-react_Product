import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

// Load environment variables from a .env file
dotenv.config();

// Connect to the database
const db = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT || 'mysql', // Use 'mysql' by default if DB_DIALECT is not set
    logging: false, // Optional: Set to `false` to disable SQL query logging
  }
);

// Test connection to the database
async function testConnection() {
  try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

testConnection();

export default db;
