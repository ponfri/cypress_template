import { AuthGuardService, authGuard } from './auth.guard';

describe('AuthGuardService', () => {
  it('should be created', () => {
    const service = new AuthGuardService();
    expect(service).toBeTruthy();
  });
});

describe('authGuard', () => {
  it('should be defined', () => {
    expect(authGuard).toBeDefined();
  });
});
