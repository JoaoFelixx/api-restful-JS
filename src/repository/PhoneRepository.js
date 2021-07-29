const connection = require('../connection/mysqlConnection');

class PhoneRepository {

  constructor() {
    connection.connect((err) => {
      if (err) throw new Error();
    })
  }

  async add(_id, phoneNumber) {

    return await connection.promise().execute(
      'INSERT INTO phones (phone_id, phone_number) VALUES (?,?)',
      [_id, phoneNumber]
    )
  }

  async removeById(_id) {

    return await connection.promise().execute(
      'DELETE FROM `phones` WHERE phone_id = ?',
      [_id],
    )
  }

  async removeByPhoneNumber(phone_number) {
    return await connection.promise().execute(
      'DELETE FROM `phones` WHERE phone_number = ?',
      [phone_number],
    )
  }
}

module.exports = new PhoneRepository()