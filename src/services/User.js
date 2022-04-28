import Validator from 'services/Validator';
import Token from 'services/Token';

class UserService {
  static async isAuthenticated() {
    const token = await Token.get();
    return !!token;
  }

  static validateEmail(email) {
    return Validator.validateEmail(email);
  }

  static validateLoginPassword(password) {
    return Validator.validatePassword(password);
  }

  static validateRegisterPassword(password, repeatedPassword) {
    const passwordValidation = Validator.validatePassword(password);
    if (!passwordValidation.isValid) {
      return passwordValidation;
    }

    return Validator.validatePasswordMatch(password, repeatedPassword);
  }

  static validateTerms(checkboxState) {
    return Validator.validateTerms(checkboxState);
  }

  static validateFirstName(firstName) {
    return Validator.validateFirstName(firstName);
  }

  static validateLastName(lastName) {
    return Validator.validateLastName(lastName);
  }
}

export default UserService;
