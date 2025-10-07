import { BasePage } from "./BasePage.po";

export default class LoginPage extends BasePage {
  
  // Private element selectors.

  #elements = {
    // Login form
  loginUsernameInput: () => cy.get('form').first().find('input').first(),
  loginPasswordInput: () => cy.get('form').first().find('input').eq(1),
  loginShowPasswordBtn: () => cy.get('form').first().contains('Password:').parent().find('button'),
  loginButton: () => cy.get('form').first().contains('button', 'Login'),

  // Create Account form
  registerUsernameInput: () => cy.get('form').eq(1).find('input[formcontrolname="username"]'),
  registerPasswordInput: () => cy.get('form').eq(1).find('input[formcontrolname="password"]'),
  registerShowPasswordBtn: () => cy.get('form').eq(1).contains('Password:').parent().find('button'),
  roleUserRadio: () => cy.get('form').eq(1).find('input[type="radio"][value="user"]'),
  roleAdminRadio: () => cy.get('form').eq(1).find('input[type="radio"][value="admin"]'),
  createAccountButton: () => cy.get('form').eq(1).find('button[type="submit"]'),
  };

  // Getters.

  get loginUsername() {
    return this.#elements.loginUsernameInput();
  }
  get loginPassword() {
    return this.#elements.loginPasswordInput();
  }
  get loginShowPassword() {
    return this.#elements.loginShowPasswordBtn();
  }
  get loginBtn() {
    return this.#elements.loginButton();
  }
  get registerUsername() {
    return this.#elements.registerUsernameInput();
  }
  get registerPassword() {
    return this.#elements.registerPasswordInput();
  }
  get registerShowPassword() {
    return this.#elements.registerShowPasswordBtn();
  }
  get roleUser() {
    return this.#elements.roleUserRadio();
  }
  get roleAdmin() {
    return this.#elements.roleAdminRadio();
  }
  get createAccountBtn() {
    return this.#elements.createAccountButton();
  }

  // Interaction methods.

  typeLoginUsername(username) {
    this.loginUsername.clear().type(username);
    return this;
  }
  typeLoginPassword(password) {
    this.loginPassword.clear().type(password);
    return this;
  }
  clickLogin() {
    this.loginBtn.click();
    return this;
  }
  typeRegisterUsername(username) {
    this.registerUsername.clear().type(username);
    return this;
  }
  typeRegisterPassword(password) {
    this.registerPassword.clear().type(password);
    return this;
  }
  selectRole(role = "User") {
    if (role === "Admin") {
      this.roleAdmin.check();
    } else {
      this.roleUser.check();
    }
    return this;
  }
  clickCreateAccount() {
    this.createAccountBtn.click();
    return this;
  }

  // Workflow methods.

  login(username, password) {
    this.loginUsername.clear().type(username);
    this.loginPassword.clear().type(password);
    this.loginBtn.click();
    return this;
  }
  createUserAccount(username: string, password: string) {
    this.registerUsername.clear().type(username);
    this.registerPassword.clear().type(password);
    this.roleUser.check();
    this.createAccountBtn.click();
    return this;
  }

  createAdminAccount(username: string, password: string) {
    this.registerUsername.clear().type(username);
    this.registerPassword.clear().type(password);
    this.roleAdmin.check();
    this.createAccountBtn.click();
    return this;
  }
}
