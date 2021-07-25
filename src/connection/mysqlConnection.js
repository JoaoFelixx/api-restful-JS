const mysql      = require('mysql2')
const mysqlConfig = require('../config/mysqlConfig');


module.exports = (async () => {
  try {
    const connection = mysql.createConnection(mysqlConfig);

    console.log('safe')
  } catch (error) {
    console.log('Refused connection, error: ', error)
  }
})()