import LoginPage from '../../pageObjects/LoginPage.po';

const loginPage = new LoginPage('/');
const adminUser = Cypress.env('adminUsername') || 'admin';
const adminPass = Cypress.env('adminPassword') || 'admin123';
const userUser = Cypress.env('userUsername') || 'user';
const userPass = Cypress.env('userPassword') || 'user123';

describe('LoginPage Page Object', { tags: '@po_regression @po @login' }, () => {
  beforeEach(() => {
    loginPage.visit();
  });

  // --- Locator Getters ---
  it('loginUsername getter returns username input', () => {
    loginPage.loginUsername.should('exist').and('be.visible');
  });
  it('loginPassword getter returns password input', () => {
    loginPage.loginPassword.should('exist').and('be.visible');
  });
  it('loginShowPassword getter returns show password button', () => {
    loginPage.loginShowPassword.should('exist').and('be.visible');
  });
  it('loginBtn getter returns login button', () => {
    loginPage.loginBtn.should('exist').and('be.visible');
  });
  it('registerUsername getter returns register username input', () => {
    loginPage.registerUsername.should('exist').and('be.visible');
  });
  it('registerPassword getter returns register password input', () => {
    loginPage.registerPassword.should('exist').and('be.visible');
  });
  it('registerShowPassword getter returns register show password button', () => {
    loginPage.registerShowPassword.should('exist').and('be.visible');
  });
  it('roleUser getter returns user radio', () => {
    loginPage.roleUser.should('exist').and('be.visible');
  });
  it('roleAdmin getter returns admin radio', () => {
    loginPage.roleAdmin.should('exist').and('be.visible');
  });
  it('createAccountBtn getter returns create account button', () => {
    loginPage.createAccountBtn.should('exist').and('be.visible');
  });

  // --- Interaction Methods ---
  it('typeLoginUsername types into login username', () => {
    loginPage.typeLoginUsername('typeduser').loginUsername.should('have.value', 'typeduser');
  });
  it('typeLoginPassword types into login password', () => {
    loginPage.typeLoginPassword('typedpass').loginPassword.should('have.value', 'typedpass');
  });
  it('clickLogin clicks login button', () => {
    loginPage.typeLoginUsername('user').typeLoginPassword('pass').clickLogin();
    // No assertion, just ensure no error
  });
  it('typeRegisterUsername types into register username', () => {
    const uniqueUser = `newuser_${Date.now()}`;
    loginPage.typeRegisterUsername(uniqueUser).registerUsername.should('have.value', uniqueUser);
  });
  it('typeRegisterPassword types into register password', () => {
    const uniquePass = `newpass_${Date.now()}`;
    loginPage.typeRegisterPassword(uniquePass).registerPassword.should('have.value', uniquePass);
  });
  it('selectRole("User") checks user radio', () => {
    loginPage.selectRole('User');
    loginPage.roleUser.should('be.checked');
  });
  it('selectRole("Admin") checks admin radio', () => {
    loginPage.selectRole('Admin');
    loginPage.roleAdmin.should('be.checked');
  });
  it('clickCreateAccount clicks create account button', () => {
    const uniqueUser = `user_${Date.now()}`;
    const uniquePass = `pass_${Date.now()}`;
    loginPage.typeRegisterUsername(uniqueUser).typeRegisterPassword(uniquePass).clickCreateAccount();
    // No assertion, just ensure no error
  });

  // --- Workflow Methods ---
  it('login workflow logs in', () => {
    loginPage.login(adminUser, adminPass);
    // No assertion, just ensure no error
  });
  it('createUserAccount workflow creates user', () => {
    const uniqueUser = `user1_${Date.now()}`;
    const uniquePass = `pass1_${Date.now()}`;
    loginPage.createUserAccount(uniqueUser, uniquePass);
    // No assertion, just ensure no error
  });
  it('createAdminAccount workflow creates admin', () => {
    const uniqueUser = `admin1_${Date.now()}`;
    const uniquePass = `pass2_${Date.now()}`;
    loginPage.createAdminAccount(uniqueUser, uniquePass);
    // No assertion, just ensure no error
  });
  it('user login workflow logs in', () => {
    loginPage.login(userUser, userPass);
    // No assertion, just ensure no error
  });
});
