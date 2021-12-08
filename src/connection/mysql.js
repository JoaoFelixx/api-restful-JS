const { createConnection } = require('mysql2')
const { mysqlConfig } = require('../config');

try {
  const connection = createConnection(mysqlConfig);

  module.exports = connection

} catch (error) {
  console.error('Refused connection, error: ', error)
  throw new Error(error)
}