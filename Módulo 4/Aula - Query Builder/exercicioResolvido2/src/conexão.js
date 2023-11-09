const knex = require('knex')({
    client: 'pg',
    connection: {
        host: 'localhost',
        user: 'postgres',
        password: '270190',
        database: 'exercicio_query_buider'
    }
  });
  
  module.exports = knex;