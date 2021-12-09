const { mysqlConnection: mySql } = require('../connection');

class UserRepository {

  async get() {
    return await mySql.promise().query(
      'SELECT * FROM `users` INNER JOIN phones ON users.phone_id = phones.phone_id'
    )
  }

  async getById(_id) {
    return await mySql.promise().execute(
      'SELECT * FROM `users` INNER JOIN phones ON users.phone_id = phones.phone_id WHERE user_id = ?',
      [_id]
    )
  }

  async add(user) {
    const { _id ,first_name, last_name, email } = user;

    return await mySql.promise().execute(
      'INSERT INTO `users` (user_id ,first_name, last_name, email, phone_id) VALUES (?,?,?,?,?)',
      [_id, first_name, last_name, email, _id]
    )
  }

  async remove(_id) {
    return await mySql.promise().execute(
      'DELETE FROM `users` WHERE user_id = ?',
      [_id]
    )
  }

  async edit(_id, user) {
    const { first_name, last_name, email } = user;

    return await mySql.promise().execute(
      'UPDATE `users` SET first_name = ?, last_name = ?, email = ?  WHERE user_id = ?',
      [first_name, last_name, email, _id]
    )
  }
}

module.exports = UserRepository;