import { Dialect, Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

const DATABASE_NAME = process.env.DATABASE_NAME || 'db_name';
const DATABASE_USERNAME = process.env.DATABASE_USERNAME || '';
const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD || '';
const DATABASE_DIALECT: Dialect =
  (process.env.DATABASE_DIALECT as Dialect) || 'postgres';
const DATABASE_HOST = process.env.DATABASE_HOST || 'localhost';

export const sequelize = new Sequelize(
  DATABASE_NAME,
  DATABASE_USERNAME,
  DATABASE_PASSWORD,
  {
    host: DATABASE_HOST,
    dialect: DATABASE_DIALECT,
  }
);
export async function dbConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    await sequelize.sync({ force: false });
    console.log('All models were synchronized successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
