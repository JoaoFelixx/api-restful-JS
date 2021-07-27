const connection = require('../connection/mysqlConnection')

class Exists {
  constructor() {
    connection.connect((err) => {
      if (err) throw new Error('Connection refused')
    });
  }
}