import { TranslationPipe } from './translation.pipe';

describe('TranslationPipe', () => {
  const pipe = new TranslationPipe();
  it('should return the same value if no translation exists', () => {
    expect(pipe.transform('test')).toBe('test');
  });
});
