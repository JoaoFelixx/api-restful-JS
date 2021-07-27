const connection = require('../connection/mysqlConnection');

class UserRepository {

  constructor() {
    connection.connect((err) => {
      if (err) throw new Error('Connection refused')
    });
  }

  async createUser(_id, user) {
    return new Promise(async (resolve, reject) => {

      const { first_name, last_name, email } = user;

      await connection.execute(
        'INSERT INTO `users` (user_id ,first_name, last_name, email, phone_id) VALUES (?,?,?,?,?)',
        [_id, first_name, last_name, email, _id],

        (err) => err ? reject(err) : resolve()
      )

    })
  }

  async deleteUser(_id) {
    return new Promise(async (resolve, reject) => {
      await connection.execute(
        'DELETE FROM `users` WHERE user_id = ?',
        [_id],

        (err) => err ? reject(err) : resolve()
      )
    })
  }

  async selectAll() {

    return await connection.promise().query(
      'SELECT * FROM `users` INNER JOIN phones ON users.phone_id = phones.phone_id'
    )

  }

  async selectByEmail() {

  }

}

module.exports = new UserRepository();