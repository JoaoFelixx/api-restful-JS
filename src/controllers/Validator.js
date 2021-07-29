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

  isPhoneNumber(phone_number) {
    const error = [];

    if (typeof phone_number != 'string') {
      error.push('Phone Number is invalid')

      return [error]

    }
    const numbers = phone_number.replace(/[^0-9]/g, '');

    if (!typeof parseInt(numbers) == 'number' || phone_number.length > 16)
      error.push('Phone number is invalid');

    return [error]
  }

  isPhoneNumbers(phone_number_1, phone_number_2) {
    const error = [];

    if (typeof phone_number_1 != 'string' || typeof phone_number_2 != 'string') {
      error.push('Phone number(s) is invalid');

      return [error]
    }

    const numbers1 = phone_number_1.replace(/[^0-9]/g, '');
    const numbers2 = phone_number_2.replace(/[^0-9]/g, '');

    if (!typeof parseInt(numbers1) == 'number' || phone_number_1.length > 16)
      error.push('New phone number is invalid');

    if (!typeof parseInt(numbers2) == 'number' || phone_number_2.length > 16)
      error.push('Old phone number(s) is invalid');

    return [error]

  }

  isId(_id) {
    const REGEX_ID = new RegExp("(?=.*[}{,.^\-\|])(.{0,7}|[^0-9]*|[^a-z]*)")

    return !!REGEX_ID.test(_id)
  }

}

module.exports = new Validator()