const connection = require('../connection/mysqlConnection');

class PhoneRepository {

  constructor() {
    connection.connect((err) => {
      if (err) throw new Error();
    })
  }

  async add(_id, phoneNumber) {
    return await connection.promise().execute(
      'INSERT INTO `phones` (phone_id, phone_number) VALUES (?,?)',
      [_id, phoneNumber]
    )
  }

  async removeById(_id) {
    return await connection.promise().execute(
      'DELETE FROM `phones` WHERE phone_id = ?',
      [_id]
    )
  }

  async edit(new_phone_number, old_phone_number) {
    return await connection.promise().execute(
      'UPDATE `phones` SET phone_number = ? WHERE phone_number = ?',
      [new_phone_number, old_phone_number]
    ) 
  } 
}

module.exports = new PhoneRepository()