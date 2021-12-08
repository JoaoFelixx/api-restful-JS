const { v4 } = require('uuid')

class User {
  constructor({ first_name, last_name, email }) {
    this._id = v4();
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
  }
}