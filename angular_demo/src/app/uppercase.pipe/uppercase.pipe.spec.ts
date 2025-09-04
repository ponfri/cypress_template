import { UppercasePipe } from './uppercase.pipe';

describe('UppercasePipe', () => {
  const pipe = new UppercasePipe();
  it('should convert text to uppercase', () => {
    expect(pipe.transform('abc')).toBe('ABC');
  });
});
