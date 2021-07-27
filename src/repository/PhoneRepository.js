const connection = require('../connection/mysqlConnection');

class PhoneRepository {

  constructor() {
    connection.connect((err) => {
      if (err) throw new Error();
    })
  }

  async createPhoneNumber(_id, phoneNumbers) {
    return new Promise(async (resolve, reject) => {

      await connection.execute(
        'INSERT INTO phones (phone_id, phone_number) VALUES (?,?)',
        [_id, phoneNumbers],

        (err) => { return err ? reject(err) : resolve() }
      )

    })
  }

  async deletePhoneNumber(_id) {
    return new Promise(async (resolve, reject) => {

      await connection.execute(
        'DELETE FROM `phones` WHERE phone_id = ?',
        [_id],
        (err) => err ? reject(err) : resolve()
      )

    })
  }
}

module.exports = new PhoneRepository()