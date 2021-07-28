const connection = require('../connection/mysqlConnection');

class UserRepository {

  constructor() {
    connection.connect((err) => {
      if (err) throw new Error('Connection refused')
    });
  }

  async selectAll() {

    return await connection.promise().query(
      'SELECT * FROM `users` INNER JOIN phones ON users.phone_id = phones.phone_id'
    )
  }

  async selectByEmail(email) {
    return await connection.promise().query(
      'SELECT * FROM `users` WHERE `email` = ?',
      [email]
    )
  }

  async createUser(_id, user) {
    const { first_name, last_name, email } = user;

    return await connection.promise().execute(
      'INSERT INTO `users` (user_id ,first_name, last_name, email, phone_id) VALUES (?,?,?,?,?)',
      [_id, first_name, last_name, email, _id]
    )
  }

  async deleteUser(_id) {
    return await connection.promise().execute(
      'DELETE FROM `users` WHERE user_id = ?',
      [_id]
    )
  }

  async updateUser(first_name, last_name, email) {
    return await connection.promise().execute(
      'UPDATE `users` SET first_name = ?, last_name = ?, email = ?',
      [first_name, last_name, email]
    )
  }
}

module.exports = new UserRepository();