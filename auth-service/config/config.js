require("dotenv").config();

module.exports = {
  development: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    host: process.env.DB_CONTAINER_NAME, // host based on container name (env DB_DATABASE)
    dialect: "postgres",
    timezone: "+07:00", //for writing to database
    dialectOptions: {
      // useUTC: false, //for reading from database
      dateStrings: true,
      typeCast: true,
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  production: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    host: process.env.DB_CONTAINER_NAME, // host based on container name (env DB_DATABASE)
    dialect: "postgres",
    timezone: "+07:00", //for writing to database
    dialectOptions: {
      // useUTC: false, //for reading from database
      dateStrings: true,
      typeCast: true,
    },
    pool: {
      max: 100,
      min: 0,
      acquire: 60000,
      idle: 10000,
    },
  },
};
