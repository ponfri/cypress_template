import LoginPage from '../../pageObjects/LoginPage.po';

const loginPage = new LoginPage('/');

describe('LoginPage Page Object', () => {
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
    loginPage.typeRegisterUsername('newuser').registerUsername.should('have.value', 'newuser');
  });
  it('typeRegisterPassword types into register password', () => {
    loginPage.typeRegisterPassword('newpass').registerPassword.should('have.value', 'newpass');
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
    loginPage.typeRegisterUsername('user').typeRegisterPassword('pass').clickCreateAccount();
    // No assertion, just ensure no error
  });

  // --- Workflow Methods ---
  it('login workflow logs in', () => {
    loginPage.login('admin', 'admin123');
    // No assertion, just ensure no error
  });
  it('createUserAccount workflow creates user', () => {
    loginPage.createUserAccount('user1', 'pass1');
    // No assertion, just ensure no error
  });
  it('createAdminAccount workflow creates admin', () => {
    loginPage.createAdminAccount('admin1', 'pass2');
    // No assertion, just ensure no error
  });
});
