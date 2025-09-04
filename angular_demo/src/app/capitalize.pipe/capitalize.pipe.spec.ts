import { CapitalizePipe } from './capitalize.pipe';

describe('CapitalizePipe', () => {
  const pipe = new CapitalizePipe();
  it('should capitalize the first letter', () => {
    expect(pipe.transform('hello')).toBe('Hello');
  });
});
