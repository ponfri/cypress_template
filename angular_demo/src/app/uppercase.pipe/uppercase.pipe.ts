import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uppercase',
  // ...existing code...
})
export class UppercasePipe implements PipeTransform {
  transform(value: string): string {
    return value.toUpperCase();
  }
}
