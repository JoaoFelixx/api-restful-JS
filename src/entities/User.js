const { v4 } = require('uuid')

class User {
  constructor({ first_name, last_name, email, phone_number, _id }) {
    this._id = !_id ? v4() : _id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.phone_number = phone_number;
  }

  isValid() {
    const propertyNames = Object.getOwnPropertyNames(this);
  	const amountInvalid = propertyNames
    	.map(property => (!!this[property]) ? null : `${property} is missing`)
    	.filter(item => !!item)

  	return {
    	valid: amountInvalid.length === 0,
    	error: amountInvalid
  	}
  }
}

module.exports = User;