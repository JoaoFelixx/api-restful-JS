class Validator {

  isName(firstName, lastName) {
    const error = [];

    if (!typeof firstName == 'string' || !typeof lastName == 'string')
      error.push('Invalid type')

    if (firstName.length > 14 || lastName.length > 18)
      error.push('invalid first name or invalid last name')

    return [error];
  }

  isEmail(email) {
    const error = [];
    const REGEX_EMAIL = /\S+@\S+\.\S+/;

    if (!REGEX_EMAIL.test(email)) error.push('email is not valid');

    return [error]

  }

  isPhoneNumber(phone_numbers) {
    const error = [];

    if (typeof phone_numbers != 'string') {
      error.push('Phone Number is invalid')

      return [error]

    }
    const numbers = phone_numbers.replace(/[^0-9]/g, '');

    if (!typeof parseInt(numbers) == 'number' || phone_numbers.length > 16)
      error.push('Phone number is invalid');

    return [error]
  }

  isId(_id) {
    const REGEX_ID = new RegExp("(?=.*[}{,.^\-\|])(.{0,7}|[^0-9]*|[^a-z]*)")

    return !!REGEX_ID.test(_id)
  }

}

module.exports = new Validator()