import { TranslationPipe } from './translation.pipe';

describe('TranslationPipe', () => {
  const pipe = new TranslationPipe();
  it('should return the same value if no translation exists', () => {
    expect(pipe.transform('test')).toBe('test');
  });

  it('should return translation for known keys', () => {
    expect(pipe.transform('welcome')).toBe('Welcome to the Angular Demo!');
    expect(pipe.transform('intro')).toBe('This demo showcases Angular features including i18n.');
  });
});
