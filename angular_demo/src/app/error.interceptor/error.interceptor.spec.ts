import { ErrorInterceptor } from './error.interceptor';

describe('ErrorInterceptor', () => {
  it('should be created', () => {
    const interceptor = new ErrorInterceptor();
    expect(interceptor).toBeTruthy();
  });
});
