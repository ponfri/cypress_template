import { Pipe, PipeTransform } from '@angular/core';

const translations: Record<string, string> = {
  welcome: 'Welcome to the Angular Demo!',
  intro: 'This demo showcases Angular features including i18n.'
};

@Pipe({
  name: 'translate',
  standalone: true
})
export class TranslationPipe implements PipeTransform {
  transform(key: string): string {
    return translations[key] || key;
  }
}
