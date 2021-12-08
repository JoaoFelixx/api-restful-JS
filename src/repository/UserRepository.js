const { mysqlConnection: MySql } = require('../connection');

class UserRepository {

  async get() {
    return await MySql.promise().query(
      'SELECT * FROM `users` INNER JOIN phones ON users.phone_id = phones.phone_id'
    )
  }

  async add(user) {
    const { _id ,first_name, last_name, email } = user;

    return await MySql.promise().execute(
      'INSERT INTO `users` (user_id ,first_name, last_name, email, phone_id) VALUES (?,?,?,?,?)',
      [_id, first_name, last_name, email, _id]
    )
  }

  async remove(_id) {
    return await MySql.promise().execute(
      'DELETE FROM `users` WHERE user_id = ?',
      [_id]
    )
  }

  async edit(first_name, last_name, email, _id) {
    return await MySql.promise().execute(
      'UPDATE `users` SET first_name = ?, last_name = ?, email = ?  WHERE user_id = ?',
      [first_name, last_name, email, _id]
    )
  }
}

module.exports = UserRepository;