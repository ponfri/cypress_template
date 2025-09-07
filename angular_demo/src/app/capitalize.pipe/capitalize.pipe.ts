import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
  // ...existing code...
})
export class CapitalizePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}
