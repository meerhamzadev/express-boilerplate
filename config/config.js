const env = process.env.NODE_ENV || 'development';
require('dotenv').config();

const config = {
  development: {
    url: process.env.DEV_DATABASE_URL,
    dialect: process.env.DEV_DB,
    logging: false,
  },
  test: {
    url: process.env.TEST_DATABASE_URL,
    dialect: process.env.TEST_DB
  },
  production: {
    url: process.env.PROD_DATABASE_URL,
    dialect: process.env.PROD_DB
  }
};

module.exports = config[env];
