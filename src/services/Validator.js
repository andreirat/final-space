const defaultResult = {
  isValid: true,
  message: '',
};

/**
 * @description Validate inputs
 * Every method returns an object of the form { isValid: Boolean, message: String }
 */
class Validator {
  static validateEmail(email = '') {
    const isEmail = new RegExp(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
    if (!email.length || !isEmail.test(email)) {
      return {
        isValid: false,
        message: 'Please enter a valid email address',
      };
    }

    return defaultResult;
  }

  static validatePassword(password = '') {
    if (password.length < 8) {
      return {
        isValid: false,
        message: 'The password should contain at least 8 characters',
      };
    }
    return defaultResult;
  }

  static validatePasswordMatch(password = '', repeatedPassword = '') {
    if (
      (!password.length && !repeatedPassword.length) ||
      password !== repeatedPassword
    ) {
      return {
        isValid: false,
        message: "The two passwords don't match",
      };
    }
    return defaultResult;
  }

  static validateTerms(checkboxState) {
    if (!checkboxState) {
      return {
        isValid: false,
        message: 'You must agree to the Terms & Conditions',
      };
    }
    return defaultResult;
  }

  static validateName(name = '') {
    if (name.length < 2) {
      return {
        isValid: false,
        message: 'please_enter_a_longer_name',
      };
    }
    return defaultResult;
  }

  static validateContactText(text = '') {
    if (text.length < 6) {
      return {
        isValid: false,
        message: 'please_enter_a_longer_message',
      };
    }
    return defaultResult;
  }
}

export default Validator;
