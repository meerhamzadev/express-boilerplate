const env = process.env.NODE_ENV || 'development';
require('dotenv').config();

const config = {
  development: {
    url: process.env.DATABASE_URL,
    dialect: process.env.DB_USER,
    logging: false,
  },
  test: {
    url: process.env.TEST_DATABASE_URL,
    dialect: process.env.DB_USER,
    storage: process.env.STORAGE 
  },
  production: {
    url: process.env.PROD_DATABASE_URL,
    dialect: process.env.DB_USER
  }
};

module.exports = config[env];
