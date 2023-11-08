const knex = require('knex')({
  client: 'pg',
  connection: {
      host: 'localhost',
      user: 'postgres',
      password: '270190',
      database: 'knexjs'
  }
});

module.exports = knex;