const mysql       = require('mysql2')
const mysqlConfig = require('../config/mysqlConfig');

try {
  const connection = mysql.createConnection(mysqlConfig);

  module.exports = connection

} catch (error) {
  console.log('Refused connection, error: ', error)
}