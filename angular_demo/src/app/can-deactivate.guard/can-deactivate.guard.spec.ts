import { CanDeactivateService, canDeactivateGuard } from './can-deactivate.guard';

describe('CanDeactivateService', () => {
  it('should be created', () => {
    const service = new CanDeactivateService();
    expect(service).toBeTruthy();
  });
});

describe('canDeactivateGuard', () => {
  it('should be defined', () => {
    expect(canDeactivateGuard).toBeDefined();
  });
});
