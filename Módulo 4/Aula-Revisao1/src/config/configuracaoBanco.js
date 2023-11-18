const { Pool } = require('pg')

const bancoDeDados = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'roteiros',
  password: '270190',
  port: 5432,
})

module.exports = bancoDeDados
