// project\backend\src\knexfile.js
module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: '127.0.0.1', // or your DB host
      user: 'your_db_user',
      password: 'your_db_password',
      database: 'your_db_name'
    },
    migrations: {
      directory: __dirname + '/../database/migrations'
    },
    seeds: {
      directory: __dirname + '/../database/seeds'
    }
  }
};